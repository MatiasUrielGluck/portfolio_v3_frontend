import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import { PortfolioApp } from "./PortfolioApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PortfolioApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
