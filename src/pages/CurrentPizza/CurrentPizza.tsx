import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import styles from "./CurrentPizza.module.scss";

export default function CurrentPizza() {
  const [currentItem, setCurrentItem] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  console.log(currentItem);

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/${param.pizzaId}`);
        setCurrentItem(data);
      } catch {
        alert("Server Error");
        navigate(-1);
      }
    };
    getItem();
  }, [param]);

  return (
    currentItem && (
      <div className={styles.root}>
        <img src={currentItem.imageUrl} alt="pizza-img" />
        <h3>{currentItem.title}</h3>
        <p>{`${currentItem.price}₽`}</p>
      </div>
    )
  );
}
