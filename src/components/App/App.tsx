import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { Header } from "../Header/Header";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { CurrentPizza } from "../../pages/CurrentPizza/CurrentPizza";
import { Cart } from "../../pages/Cart/Cart";
import Home from "../../pages/Home/Home";
import fetchPizzas from "../../redux/pizzas/asyncAction";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  const { curCategory, searchValue, sortParams } = useSelector(
    (state: RootState) => state.filters
  );

  useEffect(() => {
    dispatch(fetchPizzas({ curCategory, searchValue, sortParams }));
  }, [curCategory, searchValue, sortParams]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pizzaId" element={<CurrentPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
