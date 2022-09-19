import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import CurrentPizza from "../Header/Header";
import NotFoundPage from "../Header/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":pizzaId" element={<CurrentPizza />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
