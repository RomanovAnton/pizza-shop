import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import cart from "../../../assets/cart-icon.svg";
import "./CartButton.scss";

export const CartButton: React.FC = () => {
  const { totalCount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <button className="button">
      <p>{`${totalPrice} ₽`}</p>
      <div className="button-cart-block">
        <img src={cart} alt="cart-img" />
        <div>{totalCount}</div>
      </div>
    </button>
  );
};
