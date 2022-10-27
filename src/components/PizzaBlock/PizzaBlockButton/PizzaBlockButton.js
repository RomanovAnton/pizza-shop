import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlusLogo } from "../../../assets/plus.svg";
import { addItem } from "../../../redux/cart/cartSlice";
import "./PizzaBlockButton.scss";

export default function PizzaBlockButton({ item, currentSize, currentType }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(null);

  const handleBtnClick = () => {
    dispatch(
      addItem({
        ...item,
        sizes: currentSize,
        types: currentType,
        count: 1,
        _id: `${item.title}${currentType}${currentSize}`,
      })
    );

    setCount(count + 1);
  };

  return (
    <button className="block-button" onClick={handleBtnClick}>
      <PlusLogo className="block-button__logo" />
      <span className="block-button__name">Добавить</span>
      {count && <div className="block-button__count">{count}</div>}
    </button>
  );
}

// localStorage.setItem(`${item.title}`, JSON.stringify(item));
