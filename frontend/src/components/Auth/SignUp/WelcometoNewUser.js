import { useEffect } from "react";
import { useNavigate } from "react-router";
import style from "../Auth.module.css";

export const WelcometoNewUser = ({ username }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/signin");
    }, 5000);
  }, [navigate]);

  return (
    <div className={style.formContainer}>
      <h2>Welcome, {username}</h2>
      <p>You will be redirected to the login page in 5 seconds.</p>
    </div>
  );
};
