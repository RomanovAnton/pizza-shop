import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import clearIcon from "../../assets/search-clear-icon.svg";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <img className="search__search-icon" src={searchIcon} alt="search-icon" />
      <input className="search__input" type="text" placeholder="search..." />
      <img className="search__clear-icon" src={clearIcon} alt="clear-icon" />
    </div>
  );
}
