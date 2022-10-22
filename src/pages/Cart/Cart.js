import React from "react";
import CartItem from "./CartItem/CartItem";
import clearIcon from "../../assets/cart-clear-icon.svg";
import "./Cart.scss";

export default function Cart() {
  let cartList = [];
  for (let i = 0; i < localStorage.length; i++) {
    cartList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  return (
    <div className="cart">
      <div className="cart-top">
        <img src="" alt="cart" className="cart-top__logo" />
        <h2 className="cart-top__title">Корзина</h2>
        <div className="cart-top__clear">
          <img
            src={clearIcon}
            alt="clear-cart"
            className="cart-top__clear-logo"
          />
          <span className="cart-top__clear-text">Очистить корзину</span>
        </div>
      </div>
      <ul className="cart-list">
        {cartList.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="cart-total">
        <p className="cart-total__count">Всего пицц: 3 шт.</p>
        <p className="cart-total__price">Сумма заказа: 900 ₽</p>
      </div>
      <div className="cart-bottom">
        <button className="cart__btn-nav"> ← Вернуться назад</button>
        <button className="cart__btn-pay">Оплатить сейчас</button>
      </div>
    </div>
  );
}
