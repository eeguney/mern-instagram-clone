import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneAndEmailTab from "../components/Auth/SignUp/PhoneAndEmailTab";
import style from "../components/Auth/Auth.module.css";
import { SignUpIcon } from "../components/UI/Icons";
import Wrapper from "../components/Wrapper";
import { NameAndPassword } from "../components/Auth/SignUp/NameAndPassword";
import ProfilePhotoSelect from "../components/Auth/SignUp/ProfilePhotoSelect";

import { signup, uploadtoCloudinary } from "../api";
import { WelcometoNewUser } from "../components/Auth/SignUp/WelcometoNewUser";
import { UPLOADPRESET } from "../constants/Cloudinary";

export default function SignUp() {
  const [form, setform] = useState({
    email: "",
    number: "",
    fullname: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [stepIndex, setstepIndex] = useState(1);
  const [loading, setloading] = useState(false);

  const step = async (stepIndex, info) => {
    switch (stepIndex) {
      case 1:
        setform({ ...form, email: info.email });
        setstepIndex(2);
        break;
      case 2:
        setform({
          ...form,
          fullname: info.fullname,
          username: info.username,
          password: info.password,
        });
        setstepIndex(3);
        break;
      case 3:
        setloading(true)
        const formData = new FormData();
        formData.append("file", info);
        formData.append("upload_preset", UPLOADPRESET);
        const imageurl = await uploadtoCloud(formData);
        await goRegister(imageurl);
        
        break;
      default:
        break;
    }
  };

  const uploadtoCloud = async (data) => {
    try {
      const res = await uploadtoCloudinary(data);
      return res.data.secure_url;
    } catch (error) {
      console.log(error.message)
    }
  };

  const goRegister = async (imageurl) => {
    try {
      await signup({...form, profilePhoto: imageurl});
      setloading(false)
      setstepIndex(4);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper navigation={false}>
      <div className={style.signUpContainer}>
        <div className={style.center}>
          {stepIndex === 1 ? (
            <>
              <img src={SignUpIcon} alt="Sign Up" />
              <PhoneAndEmailTab step={step} />
            </>
          ) : stepIndex === 2 ? (
            <NameAndPassword step={step} />
          ) : stepIndex === 3 ? (
            <ProfilePhotoSelect step={step} loading={loading} />
          ) : stepIndex === 4 ? (
            <WelcometoNewUser username={form.username} />
          ) : (
            ""
          )}
        </div>
        <button
          type="button"
          className={style.changeMode}
          onClick={() => navigate("/signin")}
        >
          Are you already member? <span>Sign in.</span>
        </button>
      </div>
    </Wrapper>
  );
}
