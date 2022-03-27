import { useState } from "react"
import style from "./Header.module.css";
import { Logo } from "../../components/UI/Icons";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router";

export default function TopNavigation() {
  const navigate = useNavigate()
  const [dropdown, setdropdown] = useState(false)
  return (
    <>
      <button type="button" className={style.logo}>
        <img src={Logo} alt="Logo" />
      </button>
      <div className={style.buttons}>
        <Button.Add onClick={() => setdropdown(!dropdown)} />
        <Button.Activity onClick={() => {}} />
        <Button.Messenger onClick={() => {}} />
        {
        dropdown ?
        <div className={style.dropdownMenu}>
        <button type="button" onClick={() => navigate("/addpost")}>Post</button>
        <button type="button" onClick={() => navigate("/addstory")}>Story</button>
        <button type="button">Reels</button>
      </div>
      : ""
      }
      </div>
    </>
  );
}
