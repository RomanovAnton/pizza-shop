import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  deleteItem,
  setTotal,
} from "../../../redux/cart/cartSlice";
import deleteIcon from "../../../assets/cart-delete-icon.svg";
import "./CartItem.scss";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (item.count === 0) {
      dispatch(deleteItem(item._id));
    }
  }, [item.count]);

  return (
    <div className="cart-item">
      <div className="info">
        <img src={item.imageUrl} alt="pizza-img" className="info__image" />
        <p className="info__title">{item.title}</p>
        <p className="info__description">{`${item.types} тесто, ${item.sizes}см`}</p>
      </div>
      <div className="counter">
        <button
          className="counter__btn"
          onClick={() => {
            dispatch(decrementCount(item._id));
            dispatch(setTotal());
          }}
        >
          -
        </button>
        <span className="counter__result">{item.count}</span>
        <button
          className="counter__btn"
          onClick={() => {
            dispatch(incrementCount(item._id));
            dispatch(setTotal());
          }}
        >
          +
        </button>
      </div>

      <div className="price">{`${item.price} ₽`}</div>
      <img
        src={deleteIcon}
        alt="clear-icon"
        className="clear-icon"
        onClick={() => {
          dispatch(deleteItem(item._id));
          dispatch(setTotal());
        }}
      />
    </div>
  );
}
