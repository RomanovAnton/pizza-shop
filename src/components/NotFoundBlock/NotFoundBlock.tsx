import React from "react";
import searchImage from "../../assets/search-icon.svg";
import "./NotFoundBlock.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found-block">
      <img
        src={searchImage}
        alt="search-icon"
        className="not-found-block__image"
      />
      <p className="not-found-block__text">Результатов не найдено</p>
      <p className="not-found-block__text">Попробуй скорректировать запрос</p>
    </div>
  );
};
