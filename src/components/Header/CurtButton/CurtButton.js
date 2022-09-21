import React from "react";
import cart from "../../../images/cart.svg";
import "./CartButton.css";

export default function CurtButton() {
  return (
    <button className="cart-button">
      <p className="cart-button__sum">500 ₽</p>
      <div className="cart-button-block">
        <img src={cart} alt="cart-button__logo" />
        <div className="cart-button__count">4</div>
      </div>
    </button>
  );
}
