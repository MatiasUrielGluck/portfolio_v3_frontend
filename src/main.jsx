import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import { Portfolio } from "./Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Portfolio />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
