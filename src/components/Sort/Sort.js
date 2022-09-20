import React, { useState } from "react";
import "./Sort.css";

export default function Sort() {
  const sortType = ["по популярности", "по цене (asc)", "по цене (desc)"];
  const [currentType, setCurrentType] = useState("по популярности");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sort">
      <p className="sort__caption">Сортировка по:</p>
      <span className="sort__current-type" onClick={() => setIsOpen(true)}>
        {currentType}
      </span>

      {isOpen && (
        <div className="sort__popup">
          <ul className="sort__list">
            {sortType.map((nameType, idx) => (
              <li
                key={idx}
                className={
                  idx === sortType.indexOf(currentType)
                    ? "sort__list-item sort__list-item_active"
                    : "sort__list-item"
                }
                onClick={() => {
                  setCurrentType(sortType[idx]);
                  setIsOpen(false);
                }}
              >
                {nameType}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
