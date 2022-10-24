import React from "react";
import { useSelector } from "react-redux";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import styles from "./PizzaList.module.scss";

export default function PizzaList() {
  const data = useSelector((state) => state.pizzas.items);

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.list}>
        {data &&
          data.map((item, idx) => (
            <li key={idx}>
              <PizzaBlock item={item} />
            </li>
          ))}
      </ul>
    </>
  );
}
