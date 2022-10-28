import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, setTotal } from "../../redux/cart/cartSlice";
import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import cartIcon from "../../assets/cart-icon-black.svg";
import clearIcon from "../../assets/cart-clear-icon.svg";
import "./Cart.scss";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalCount, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="cart-top">
            <img src={cartIcon} alt="cart" className="cart-top__logo" />
            <h2 className="cart-top__title">Корзина</h2>
            <div
              className="cart-top__clear"
              onClick={() => {
                dispatch(clearCart());
                dispatch(setTotal());
              }}
            >
              <img
                src={clearIcon}
                alt="clear-cart"
                className="cart-top__clear-logo"
              />
              <span className="cart-top__clear-text">Очистить корзину</span>
            </div>
          </div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ul>
          <div className="cart-total">
            <span>Всего пицц:</span>
            <p className="cart-total__count">{`${totalCount}шт`}</p>
            <span>Сумма заказа:</span>
            <p className="cart-total__price">{`${totalPrice} ₽`}</p>
          </div>
          <div className="cart-bottom">
            <button
              className="cart-bottom__btn cart-bottom__btn_nav"
              onClick={() => navigate(-1)}
            >
              ← Вернуться назад
            </button>
            <button className="cart-bottom__btn cart-bottom__btn_pay">
              Оплатить сейчас
            </button>
          </div>
        </>
      )}
    </div>
  );
}
