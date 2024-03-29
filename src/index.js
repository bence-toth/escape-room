import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Countdown, { startDate } from "./Countdown";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const isItTime =
  Date.now() > new Date(startDate).getTime() ||
  localStorage.getItem("game-run") === "true";

ReactDOM.render(
  <React.StrictMode>
    {process.env.NODE_ENV === "production" ? (
      <BrowserRouter basename="/cc14d99e2ee3">
        {isItTime ? <App /> : <Countdown />}
      </BrowserRouter>
    ) : (
      <BrowserRouter>{isItTime ? <App /> : <Countdown />}</BrowserRouter>
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
