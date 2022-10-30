import React from "react";
import searchImage from "../assets/search-image.png";
import "./NotFoundBlock.scss";

export default function NotFoundBlock() {
  return (
    <div className="not-found-block">
      <img
        src={searchImage}
        alt="search-icon"
        className="not-found-block__image"
      />
      <p className="not-found-block__text">Мы никого не нашли</p>
      <p className="not-found-block__text">Попробуй скорректировать запрос</p>
    </div>
  );
}
