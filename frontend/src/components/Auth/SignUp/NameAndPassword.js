import { useState, useRef } from "react";
import { checkEmailORNumber } from "../../../api";
import style from "../Auth.module.css";

export const NameAndPassword = ({ step }) => {
  const [form, setform] = useState({
    fullname: null,
    username: null,
    password: null,
  });
  const [error, seterror] = useState(null);

  let fullnameRef = useRef();
  let usernameRef = useRef();
  let passwordRef = useRef();

  const checkName = () => {
    seterror(null);
    const fullname = fullnameRef.current.value;
    if (fullname.length < 4 || fullname.length > 25) {
      seterror("Your name is too short or long.");
      return;
    }
    setform({ ...form, fullname });
  };

  const checkUsername = async () => {
    seterror(null);
    const username = usernameRef.current.value;

    if (username.length < 3 || username.length > 20) {
      seterror("Your username is too short or long.");
      return;
    }
    const isExist = await checkEmailORNumber({ username: username });
    if (isExist.data) {
      seterror("This username already in use.");
      return;
    }
    setform({ ...form, username });
  };

  const checkPassword = () => {
    seterror(null);
    const password = passwordRef.current.value;
    if (password.length < 8 || password.length > 25) {
      seterror("Your password is too short or long.");
      return;
    }
    setform({ ...form, password });
  };

  return (
    <div className={style.formContainer}>
      <h3 className={style.componentTitle}>NAME AND PASSWORD</h3>
      <form autoComplete="off" className={style.w_100}>
        <section>
          <input
            ref={fullnameRef}
            type="text"
            id="fullname"
            placeholder="Your name and surname"
            onChange={checkName}
          />
          <input
            ref={usernameRef}
            type="text"
            id="username"
            placeholder="Username"
            onChange={checkUsername}
          />
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Password"
            onChange={checkPassword}
          />
          {error ? <span className={style.error}>{error}</span> : ""}
          <button
            onClick={() => (error === null ? step(2, form) : "")}
            type="button"
            className={`${style.submit} ${
              error !== null ? style.disabled : ""
            }`}
          >
            Continue
          </button>
        </section>
      </form>
    </div>
  );
};
