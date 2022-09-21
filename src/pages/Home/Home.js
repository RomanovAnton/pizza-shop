import React from "react";
import Categories from "../../components/Categories/Categories";
import PizzaList from "../../components/PizzaList/PizzaList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Categories />
      <PizzaList />
    </div>
  );
}
