import { useState, useRef } from "react";
import { checkEmailORNumber } from "../../../api";
import validateEmailAdress from "../../../helpers/validateEmailAdress";
import style from "../Auth.module.css";

const PhoneAndEmailTab = ({ step }) => {
  const [form, setform] = useState({ email: "", number: "" });
  const [error, seterror] = useState(null);
  const [tab, settab] = useState("EMAIL");

  let emailRef = useRef();
  let numberRef = useRef();

  const checkEmail = async () => {
    seterror(null);
    const email = emailRef.current.value;
    if (!validateEmailAdress(email)) {
      seterror("This email adress is not valid.");
      return;
    }
    const isExist = await checkEmailORNumber({ email });
    if (isExist.data) {
      seterror("This email is currently in use.");
      return;
    }
    setform({...form, email});
  };

  const checkNumber = async () => {
    seterror(null);
    const number = numberRef.current.value;
    if (number.length > 11 && number.length < 14) {
      const isExist = await checkEmailORNumber({ number });
      if (isExist.data) {
        seterror("This number is currently in use.");
        return;
      }
      setform({...form, number});
    } else seterror("This number is not valid.");
  };


  return (
    <div className={style.tab}>
      <header>
        <label
          type="button"
          htmlFor="email"
          onClick={() => settab("EMAIL")}
          className={tab === "EMAIL" ? style.active : ""}
        >
          EMAIL
        </label>
        <label
          type="button"
          htmlFor="phone"
          onClick={() => settab("PHONE")}
          className={tab === "PHONE" ? style.active : ""}
        >
          PHONE
        </label>
      </header>
      <form autoComplete="off">
      <section>

        {tab === "EMAIL" ? (
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Email"
            onChange={checkEmail}
          />
        ) : (
          <input
            type="number"
            id="phone"
            ref={numberRef}
            placeholder="Phone"
            onChange={checkNumber}
          />
        )}
        {error ? <span className={style.error}>{error}</span> : ""}
        <button
          onClick={() => error === null ? step(1, form) : ""}
          type="button"
          className={`${style.submit} ${error !== null ? style.disabled : ""}`}
        >
          Continue
        </button>
      </section>
        </form>
    </div>
  );
};

export default PhoneAndEmailTab;
