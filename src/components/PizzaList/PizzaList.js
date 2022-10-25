import React from "react";
import { useSelector } from "react-redux";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import { Skeleton } from "../PizzaBlock/Skeleton";
import styles from "./PizzaList.module.scss";

export default function PizzaList() {
  const { items, status } = useSelector((state) => state.pizzas);
  const skeletArr = [...Array(10).keys()];

console.log(items)


  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.list}>
        {status === "loading" &&
          skeletArr.map((item, idx) => (
            <li key={idx}>
              <Skeleton />
            </li>
          ))}
        {status === "resolved" &&
          items.map((item, idx) => (
            <li key={idx}><PizzaBlock item={item} /></li>
          ))}
      </ul>
      {status === "rejected" && <NotFoundPage />}
    </>
  );
}
