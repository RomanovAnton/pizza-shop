import React from "react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../../../assets/empty-cart-image.png";
import "./EmptyCart.scss";

export const EmptyCart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <p className="empty-cart__title">Корзина пуста 😕</p>
      <p className="empty-cart__text">
        Вероятней всего, вы еще не добавили пиццу в корзину. Для заказа
        перейдите на главную страницу.
      </p>
      <img src={emptyCart} alt="empty-cart-img" className="empty-cart__image" />
      <button className="empty-cart__btn" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </div>
  );
};
