import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortParams } from "../../redux/filters/filtersSlice";
import "./Sort.scss";

export default function Sort() {
  const popupRef = useRef();
  const dispatch = useDispatch();
  const sortParams = useSelector((state) => state.filters.sortParams);
  const [isOpen, setIsOpen] = useState(false);
  const sortType = [
    { name: "по популярности", order: "-rating" },
    { name: "по цене (asc)", order: "price" },
    { name: "по цене (desc)", order: "-price" },
  ];

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
        {sortParams.name}
      </span>

      {isOpen && (
        <div className="sort__menu">
          <ul>
            {sortType.map((el, idx) => (
              <li
                key={idx}
                className={el.name === sortParams.name ? "active" : ""}
                onClick={() => {
                  dispatch(setSortParams(el));
                  setIsOpen(false);
                }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
