import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import clearIcon from "../../images/clearIcon.svg";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <img className="search__icon" src={searchIcon} alt="search-icon" />
      <input type="text" placeholder="Поиск пиццы..."  className="search__input"/>
      <img className="search__clear-icon" src={clearIcon} alt="clear-icon" />
    </div>
  );
}
