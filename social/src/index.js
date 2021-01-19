import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import state from "./Redux/state.js";
import { addMyPost, addChatMassage, subscribe } from "./Redux/state.js";

export let renderEnterTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App BD={state} addMyPost={addMyPost} addChatMassage={addChatMassage} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEnterTree();
subscribe(renderEnterTree);

// ReactDOM.render(
//   <React.StrictMode>
//     <App BD={state} addMyPost={addMyPost} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

reportWebVitals();
