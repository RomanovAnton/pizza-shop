import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./Sort.scss";

export default function Sort() {
  const popupRef = useRef();
  const sortType = ["по популярности", "по цене (asc)", "по цене (desc)"];
  const [currentType, setCurrentType] = useState("по популярности");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (evt) => {
      if (!evt.path.includes(popupRef.current)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.addEventListener("click", handleClickOutSide);
    };
  });

  return (
    <div className="sort" ref={popupRef}>
      <p className="sort__caption">Сортировка по:</p>
      <span className="sort__current-type" onClick={() => setIsOpen(true)}>
        {currentType}
      </span>

      {isOpen && (
        <div className="sort__menu">
          <ul>
            {sortType.map((nameType, idx) => (
              <li
                key={idx}
                className={
                  idx === sortType.indexOf(currentType) ? "active" : ""
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
