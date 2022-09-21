import React, { useState } from "react";
import PizzaBlockButton from "./PizzaBlockButton/PizzaBlockButton";
import "./PizzaBlock.css";

export default function PizzaBlock({ card }) {
  const type = ["тонкое", "традиционное"];
  const [currentType, setCurrentType] = useState(type[0]);
  const [currentSize, setCurrentSize] = useState(null);

  return (
    <div className="pizza-block">
      <div className="pizza-block__top">
        <img src={card.imageUrl} alt="pizza" />
        <h3 className="pizza-block__name">{card.title}</h3>
      </div>
      <div className="constructor">
        <ul className="constructor__list">
          {card.types.map((el) => (
            <li
              className={
                currentType === type[el]
                  ? "constructor__item constructor__item_active"
                  : "constructor__item "
              }
              key={el}
              onClick={() => setCurrentType(type[el])}
            >
              {type[el]}
            </li>
          ))}
        </ul>

        <ul className="constructor__list">
          {card.sizes.map((el) => (
            <li
              className={
                currentSize === el
                  ? "constructor__item constructor__item_active"
                  : "constructor__item"
              }
              onClick={() => setCurrentSize(el)}
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <span className="pizza-block__price">{`От ${card.price} ₽`}</span>
        <PizzaBlockButton />
      </div>
    </div>
  );
}
