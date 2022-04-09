import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import './initialValues';

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// contexts
import { AuthProvider } from "./context/AuthContext";

import { BasketProvider } from "./context/BasketContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BasketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BasketProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
