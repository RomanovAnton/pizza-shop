import React from "react";
import { useSelector } from "react-redux";
import cart from "../../../assets/cart-icon.svg";
import "./CartButton.scss";

export default function CartButton() {
  const { totalCount, totalPrice } = useSelector((state) => state.cart);
  return (
    <button className="button">
      <p>{`${totalPrice} ₽`}</p>
      <div className="button-cart-block">
        <img src={cart} alt="cart-img" />
        <div>{totalCount}</div>
      </div>
    </button>
  );
}
