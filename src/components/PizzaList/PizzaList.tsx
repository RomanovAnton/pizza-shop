import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NotFoundBlock } from "../NotFoundBlock/NotFoundBlock";
import { PizzaBlock } from "../PizzaBlock/PizzaBlock";
import { Skeleton } from "../PizzaBlock/Skeleton";
import styles from "./PizzaList.module.scss";
const skeletArr = [...Array(10).keys()];

export const PizzaList: React.FC = () => {
  const { items, status } = useSelector((state: RootState) => state.pizzas);

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
        {items.length > 0 &&
          items.map((item, idx) => (
            <li key={idx}>
              <PizzaBlock {...item} />
            </li>
          ))}
      </ul>
      {items.length === 0 && <NotFoundBlock />}
      {status === "rejected" && <h3>Ошибка сервера!</h3>}
    </>
  );
};
