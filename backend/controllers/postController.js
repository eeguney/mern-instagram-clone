// model imports
import PostModel from "../models/Post.js";
import UserModel from "../models/User.js";

export const addPost = async (req, res) => {
  const userID = req.params.userID;
  const { description, data } = req.body;
  try {
    if (!userID || !description || !data) {
      return res.status(400).json({ msg: "Please fill in all fields." });
    }
    const newPost = new PostModel({
      userID,
      description,
      data,
    });
    await newPost.save();
    return res.status(200).json({ msg: "New post successfully added." });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAPostWithUserInfo = async (req, res, next) => {
  const postID = req.params.postID;
  try {
    const post = await PostModel.findOne({ _id: postID });
    if (!post) return next();
    const user = await UserModel.findOne({ _id: post.userID });
    const userInfo = {
      username: user.username,
      profilePhoto: user.profilePhoto,
    };
    return res.status(200).json({ userInfo, ...post._doc });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllPostsbyPublicProfile = async (req, res) => {
  try {
    const postArray = [];
    const posts = await PostModel.find().sort({ createdAt: -1 });
    if (posts.length < 1)
      return res.status(400).json({ msg: "There is no post." });
    for (const post of posts) {
      const postUser = await UserModel.findOne({ _id: post.userID });
      postArray.push({
        post,
        userInfo: {
          username: postUser.username,
          profilePhoto: postUser.profilePhoto,
        },
      });
    }

    return res.status(200).json(postArray);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllPostByUserID = async (req, res, next) => {
  try {
    const userID = req.params.userID;
    const posts = await PostModel.find({ userID });
    if (posts.length < 1)
      return res.status(400).json({ msg: "Wrong post ID." });
    const user = await UserModel.findOne({ _id: userID });
    const userInfo = {
      username: user.username,
      profilePhoto: user.profilePhoto,
    };
    return res.status(200).json({ userInfo, ...posts });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
