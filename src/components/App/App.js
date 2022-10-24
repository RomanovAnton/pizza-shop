import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchPizzas from "../../redux/asyncAction";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import CurrentPizza from "../../pages/CurrentPizza/CurrentPizza";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Cart from "../../pages/Cart/Cart";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
