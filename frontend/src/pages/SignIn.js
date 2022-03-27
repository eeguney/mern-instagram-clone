import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../api";
import style from "../components/Auth/Auth.module.css";
import Wrapper from "../components/Wrapper";
import { signIn } from "../store/actions/user";

export const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  const signInHandler = () => {
    setloading(true);
    setTimeout(() => {
      login();
    }, 500);
    const login = async () => {
      try {
        const { data } = await signin({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        console.log(data.msg)
         dispatch(signIn(data, navigate)).then(() => window.location.replace("/home")).catch((err) => seterror(err.msg))
      } catch (error) {
        console.log(error)
        seterror(error.message)
      }
      setloading(false);
    };
  };

  return (
    <Wrapper navigation={false}>
      <div className={style.signUpContainer}>
        <div className={style.center}>
          <h3 className={style.componentTitle}>SIGN IN</h3>
          <section>
            <input ref={emailRef} type="email" id="email" placeholder="Email" />
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="Password"
            />
            {error ? <p>{error}</p> : ""}
            <button
              onClick={signInHandler}
              type="button"
              className={`${style.submit} `}
            >
              Continue
            </button>
          </section>
        </div>
        <button type="button" className={style.changeMode} onClick={() => navigate("/signup")}>
          Not a member yet? <span>Sign up.</span>
        </button>
      </div>
    </Wrapper>
  );
};
