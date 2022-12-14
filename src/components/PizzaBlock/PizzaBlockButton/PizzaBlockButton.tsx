import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlusLogo } from "../../../assets/plus.svg";
import { addItem, setTotal } from "../../../redux/cart/cartSlice";
import { IPizzaButton } from "./types";
import "./PizzaBlockButton.scss";
import { withSnackbar } from "../../SnackBar/SnackBarHOC";

export const PizzaBlockButton: React.FC<IPizzaButton> = ({
  item,
  currentSize,
  currentType,
  handleClick,
}) => {
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

  return (
    <>
      <button className="block-button" onClick={handleBtnClick}>
        <PlusLogo className="block-button__logo" />
        <span className="block-button__name">Добавить</span>
      </button>
    </>
  );
};

export default withSnackbar(PizzaBlockButton);
