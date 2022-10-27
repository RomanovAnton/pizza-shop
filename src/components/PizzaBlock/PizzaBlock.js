import React, { useState } from "react";
import PizzaBlockButton from "./PizzaBlockButton/PizzaBlockButton";
import { DEFAULT_SIZE } from "../../utils/constants";
import "./PizzaBlock.scss";

export default function PizzaBlock({ item }) {
  const type = ["тонкое", "традиционное"];
  const [currentType, setCurrentType] = useState(type[0]);
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  return (
    <div className="pizza-block">
      <div className="pizza-block__top">
        <img src={item.imageUrl} alt="pizza" />
        <h3>{item.title}</h3>
      </div>
      <div className="constructor">
        <ul>
          {item.types &&
            item.types.map((el) => (
              <li
                className={currentType === type[el] ? "active" : ""}
                key={el}
                onClick={() => setCurrentType(type[el])}
              >
                {type[el]}
              </li>
            ))}
        </ul>

        <ul>
          {item.sizes &&
            item.sizes.map((el) => (
              <li
                className={currentSize === el ? "active" : ""}
                onClick={() => setCurrentSize(el)}
                key={el}
              >
                {el}
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <span className="pizza-block__price">{`От ${item.price} ₽`}</span>
        <PizzaBlockButton
          item={item}
          currentType={currentType}
          currentSize={currentSize}
        />
      </div>
    </div>
  );
}
