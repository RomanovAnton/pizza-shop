import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./sass/_main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);
