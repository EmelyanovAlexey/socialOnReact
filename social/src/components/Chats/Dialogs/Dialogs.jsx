import React from "react";

import "./dialogs.css";

const Dialogs = (props) => {
  return (
    <a href="#" className="blockLine">
      <img src={props.linkImg} alt="photo" />
      <div className="blockLineText">
        <p className="fio">{props.textFIO}</p>
        <p className="dateDialog">{props.textTime}</p>
      </div>
    </a>
  );
};
export default Dialogs;
