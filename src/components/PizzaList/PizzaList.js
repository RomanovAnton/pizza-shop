import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import "./PizzaList.css";

export default function PizzaList() {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <h2 className="title">Все пиццы</h2>
      <ul className="pizza-list">
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <PizzaBlock card={item} />
            </li>
          ))}
      </ul>
    </>
  );
}
