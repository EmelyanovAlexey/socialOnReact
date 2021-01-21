import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./Redux/redux_store.js";

export let renderEnterTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEnterTree();
store.subscribe(renderEnterTree);

// ReactDOM.render(
//   <React.StrictMode>
//     <App BD={state} addMyPost={addMyPost} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

reportWebVitals();
