import React, { useState } from "react";
import { Link } from "react-router-dom";
import PizzaBlockButton from "./PizzaBlockButton/PizzaBlockButton";
import { DEFAULT_SIZE } from "../../utils/constants";
import "./PizzaBlock.scss";

const type = ["тонкое", "традиционное"];
type PizzaItem = {
  item: {
    category: number;
    id: string;
    imageUrl: string;
    price: number;
    rating: number;
    sizes: number[];
    title: string;
    types: number[];
  };
};

export const PizzaBlock: React.FC<PizzaItem> = ({ item }) => {

  const [currentType, setCurrentType] = useState(type[0]);
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);
  return (
    <div className="pizza-block">
      <Link to={`/${item.id}`} className="pizza-block__top">
        <img src={item.imageUrl} alt="pizza" />
        <h3>{item.title}</h3>
      </Link>
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
};
