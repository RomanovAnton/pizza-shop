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

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const curCategory = useSelector((state: any) => state.filters.curCategory);

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
};
