import React, { useState } from "react";
import Sort from "../Sort/Sort";
import "./Categories.css";

export default function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острая",
    "Закрытые",
  ];
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((el, idx) => (
          <li
            className={
              currentCategory === idx
                ? "categories__item categories__item_active"
                : "categories__item"
            }
            key={idx}
            onClick={() => setCurrentCategory(idx)}
          >
            {el}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
}
