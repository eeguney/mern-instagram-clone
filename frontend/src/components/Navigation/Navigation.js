import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import style from "./Navigation.module.css";

export default function Navigation() {
  const authUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className={style.navigation}>
      <Button.Home onClick={() => navigate("/")} />
      <Button.Search onClick={() => navigate("/discover")} />
      <Button.Reels />
      <Button.Shop />
      <Button.Profile image={authUser.profilePhoto} />
    </div>
  );
}
