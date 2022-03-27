import TopNavigation from "./../Header/TopNavigation";
import style from "./Header.module.css"
export default function Header() {
  return (
    <header className={style.header}>
      <TopNavigation />
    </header>
  );
}
