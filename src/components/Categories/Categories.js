import React, { useState } from "react";
import "./Categories.scss";

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
      <ul>
        {categories.map((el, idx) => (
          <li
            className={
              currentCategory === idx ? "active" : ""
            }
            key={idx}
            onClick={() => setCurrentCategory(idx)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
