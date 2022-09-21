import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/pizza-logo.svg";
import Search from "../Search/Search";
import CartButton from "./CurtButton/CurtButton";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__nav">
        <img src={logo} className="header__icon" alt="logo" />
        <h1 className="header__title">REACT PIZZA</h1>
        <p className="header__caption">
          Быстрая доставка в удобное для Вас время!
        </p>
      </Link>
      <Search />
      <Link to="/cart">
        <CartButton />
      </Link>
    </div>
  );
}
