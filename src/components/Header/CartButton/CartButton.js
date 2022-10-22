import React from "react";
import cart from "../../../assets/cart-icon.svg";
import "./CartButton.scss";

export default function CartButton() {
  return (
    <button className="button">
      <p>500 ₽</p>
      <div className="button-cart-block">
        <img src={cart} alt="cart-img" />
        <div>4</div>
      </div>
    </button>
  );
}
