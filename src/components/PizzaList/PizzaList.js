import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import styles from "./PizzaList.module.scss";

export default function PizzaList() {
  const data = useContext(DataContext);

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
