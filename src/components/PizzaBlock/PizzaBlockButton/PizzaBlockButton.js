import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlusLogo } from "../../../assets/plus.svg";
import { addItem, setTotal } from "../../../redux/cart/cartSlice";
import SimpleSnackbar from "../../SnackBar/SnackBar";
import "./PizzaBlockButton.scss";

export default function PizzaBlockButton({ item, currentSize, currentType }) {
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(
      addItem({
        ...item,
        sizes: currentSize,
        types: currentType,
        count: 1,
        _id: `${item.title}${currentType}${currentSize}`,
      })
    );
    dispatch(setTotal());
    handleClick();
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <button className="block-button" onClick={handleBtnClick}>
        <PlusLogo className="block-button__logo" />
        <span className="block-button__name">Добавить</span>
      </button>
      <SimpleSnackbar
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
}
