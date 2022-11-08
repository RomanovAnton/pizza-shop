import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search/Search";
import { CartButton } from "./CartButton/CartButton";
import logo from "../../assets/header-pizza-logo.svg";
import "./Header.scss";
import { setTotal } from "../../redux/cart/cartSlice";

export const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotal());
  }, []);

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
};
