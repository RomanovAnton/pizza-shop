import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/header-pizza-logo.svg";
import Search from "../Search/Search";
import CartButton from "./CartButton/CartButton";
import "./Header.scss";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <Link to="/" className="header__nav">
        <img src={logo} alt="logo" />
        <h1>REACT PIZZA</h1>
        <p>Быстрая доставка в удобное для Вас время!</p>
      </Link>
      {location.pathname === "/" && (
        <>
          <Search />
          <Link to="/cart">
            <CartButton />
          </Link>
        </>
      )}
    </div>
  );
}
