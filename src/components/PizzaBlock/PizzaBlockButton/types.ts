import { PizzaItem } from "../../../redux/pizzas/types";

export interface IPizzaButton {
  item: PizzaItem;
  currentSize: number;
  currentType: string;
}
