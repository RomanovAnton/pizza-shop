import React from "react";
import Sort from "../../components/Sort/Sort";

import Categories from "../../components/Categories/Categories";
import PizzaList from "../../components/PizzaList/PizzaList";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="menu">
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </>
  );
}
