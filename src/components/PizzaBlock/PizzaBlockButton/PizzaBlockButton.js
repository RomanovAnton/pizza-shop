import React, { useState } from "react";
import "./PizzaBlockButton.scss";
import { ReactComponent as PlusLogo } from "../../../assets/plus.svg";

export default function PizzaBlockButton({ item }) {
  const [count, setCount] = useState(null);
  return (
    <button
      className="block-button"
      onClick={() => {
        localStorage.setItem(`${item.title}`, JSON.stringify(item));
        setCount(count + 1);
      }}
    >
      <PlusLogo className="block-button__logo" />
      <span className="block-button__name">Добавить</span>
      {count && <div className="block-button__count">{count}</div>}
    </button>
  );
}
