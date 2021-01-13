import React from "react";
import { NavLink } from "react-router-dom";

import "./dialogs.css";

const Dialogs = (props) => {
  let ico = "";
  if (props.rider > 0) {
    ico = <p className="noRiderChat">{props.rider}</p>;
  }
  return (
    <NavLink to={"chats#" + props.id} className="blockLine">
      <img src={props.img} alt="photo" />
      <div className="blockLineText">
        <p className="fio">{props.name}</p>
        <p className="dateDialog">{props.textData}</p>
      </div>
      {ico}
    </NavLink>
  );
};
export default Dialogs;
