import React from "react";
import emptyCart from "../../../assets/empty-cart-image.png";
import "./EmptyCart.scss";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <p className="empty-cart__title">Корзина пустая 😕</p>
      <p className="empty-cart__text">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="empty-cart-img" className="empty-cart__image"/>
      <button className="empty-cart__btn">Вернуться назад</button>
    </div>
  );
}
