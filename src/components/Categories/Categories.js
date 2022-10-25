import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/filters/filtersSlice";
import "./Categories.scss";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острая",
  "Закрытые",
];

export default function Categories() {
  const dispatch = useDispatch();
  const curCategory = useSelector((state) => state.filters.category);

  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => (
          <li
            className={idx === curCategory ? "active" : ""}
            key={idx}
            onClick={() => dispatch(setCategory(idx))}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
