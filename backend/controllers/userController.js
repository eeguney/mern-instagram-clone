import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// model imports
import UserModel from "../models/User.js";

dotenv.config();

const { SECRET_KEY, ACCESS_TOKEN } = process.env;

export const signIn = async (req, res) => {
  try {
    const user = await UserModel.findOne().or([
      { email: req.body.email },
      { number: req.body.number },
    ]);
    if (!user) {
      return res.status(400).json({ msg: "Wrong credentials." });
    }
    const bytes = CryptoJS.AES.decrypt(user.password, SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json({ msg: "Wrong credentials." });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        name: user.fullname,
        emailornumber: user.email ? user.email : user.number,
      },
      ACCESS_TOKEN,
      { expiresIn: "7d" }
    );
    const { password, __v, createdAt, updatedAt, ...info } = user._doc;
    return res.status(200).json({ ...info, accessToken });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const signUp = async (req, res) => {
  console.log(req.body)

  const { fullname, username, email, number, profilePhoto, password } = req.body;
  try {
    if (!fullname || !username || !password)
      return res.status(400).json({ msg: "Please fill in all fields." });
    if (email && !validateEmailAdress(email))
      return res.status(400).json({ msg: "Invalid email adress." });
    if (number && number.length < 12)
      return res.status(400).json({ msg: "Invalid number." });
    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters." });
    if (fullname.length > 40 || username.length < 4 || username.length > 40)
      return res
        .status(400)
        .json({ msg: "You entered too many or few characters." });
    const existUser = await UserModel.findOne({email});
    if (existUser) {
      return res
        .status(400)
        .json({ msg: "An user has already registered with this email." });
    } else {
      const cryptedPassword = CryptoJS.AES.encrypt(
        password,
        SECRET_KEY
      ).toString();
      const newUser = new UserModel({
        fullname,
        email: email ? email : "",
        number: number ? number : "",
        username,
        profilePhoto,
        password: cryptedPassword,
      });
      await newUser.save();
      return res.json({
        msg: "You have successfully registered!",
      });
    }
  } catch (error) {
    console.log(error)

    return res.status(500).json({ msg: error.message });
  }
};

export const fetchAnUser = async (req, res, next) => {
  if (req.method != "GET") next();
  try {
    const id = req.params.id;
    if (id) {
      const user = await UserModel.findOne({ _id: id });
      if (!user) {
        return res.status(400).json({ msg: "This doesnt exist!" });
      }
      return res.status(200).json({ msg: user });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updateAnUser = async (req, res, next) => {
  if (req.method != "PUT") next();
  const _id = req.params.id;
  const { fullname, username, profilePhoto, info } = req.body;
  try {
    const user = await UserModel.findOne({ _id });
    if (!user) {
      return res.status(400).json({ msg: "Wrong user ID." });
    }
    await UserModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          fullname,
          username,
          profilePhoto,
          info,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({ msg: "Successfully updated." });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const checkNumberOrEmailExist = async (req, res) => {
  const { email, number, username } = req.body;
  try {
    if (email) {
      const isEmailExist = await UserModel.findOne({ email });
      return res.status(200).json(isEmailExist ? true : false);
    } else if(username) {
      const isUsernameExist = await UserModel.findOne({ username });
      return res.status(200).json(isUsernameExist != null ? true : false);
    }
    const isNumberExist = await UserModel.findOne({ number });
    return res.status(200).json(isNumberExist ? true : false);
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
};

const validateEmailAdress = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
