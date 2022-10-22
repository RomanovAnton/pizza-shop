import React from "react";
import deleteIcon from "../../../assets/cart-delete-icon.svg";
import "./CartItem.scss";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="info">
        <img src={item.imageUrl} alt="pizza-img" className="info__image" />
        <p className="info__title">{item.title}</p>
        <p className="info__description">тонкое тесто, 36см</p>
      </div>
      <div className="counter">
        <div className="counter__btn">+</div>
        <span className="counter__result">2</span>
        <div className="counter__btn">-</div>
      </div>

      <div className="price">290 ₽</div>
      <img src={deleteIcon} alt="clear-icon" className="clear-icon" />
    </div>
  );
}
