import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./Redux/state.js";

ReactDOM.render(
  <React.StrictMode>
    <App BD={state} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
