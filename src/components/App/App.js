import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import CurrentPizza from "../../pages/CurrentPizza/CurrentPizza";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Cart from "../../pages/Cart/Cart";
import getPizza from "../utils/Api";
import DataContext from "../../context/DataContext";

import "./App.scss";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPizza().then((res) => setData(res.slice(0, 10)));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pizzaId" element={<CurrentPizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
