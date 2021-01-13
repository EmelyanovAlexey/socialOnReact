import React from "react";

import "./blockDialog.css";

const BlockDialog = (props) => {
  let calssNameMyDialog = "";
  if (props.id == props.myId) {
    calssNameMyDialog = "myDialog";
  }

  return (
    <div className={"blockDialog " + calssNameMyDialog}>
      <div className="photo">
        <img src={props.img} alt="" />
      </div>
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="text">{props.text}</p>
        <p className="data">{props.textData}</p>
      </div>
    </div>
  );
};
export default BlockDialog;
