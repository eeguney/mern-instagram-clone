import React from "react";
import { Search as SearchIcon } from "../../UI/Icons";
import style from "./Search.module.css";
export default function SearchInput() {
  return (
    <div className={style.searchBox}>
      <div className={style.searchInputWrapper}>
        <label htmlFor="search">
          <img src={SearchIcon} alt="search" width={17} />
        </label>
        <input id="search" type="text" placeholder="Search" />
      </div>
    </div>
  );
}
