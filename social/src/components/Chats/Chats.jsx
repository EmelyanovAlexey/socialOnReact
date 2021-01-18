import React from "react";

import Dialogs from "./Dialogs/Dialogs.jsx";
import BlockDialog from "./BlockDialog/BlockDialog.jsx";

import "./chats.css";

const Chats = (props) => {
  let listDialogs = props.dataListDialogs.map((d) => (
    <Dialogs
      id={d.id}
      img={d.img}
      name={d.name}
      textData={d.textData}
      rider={d.rider}
    />
  ));

  let Dialog = props.dataDialog.map((d) => (
    <BlockDialog
      id={d.id}
      myId={props.myId}
      img={d.img}
      name={d.name}
      textData={d.textData}
      text={d.text}
    />
  ));

  return (
    <div className="content">
      <div className="fullDialogs">
        <div className="listDialogs">
          <div className="searchDialogBlock">
            <input className="searchDialog" type="text" />
            <button> поиск </button>
          </div>
          {listDialogs}
        </div>

        <div className="dialog">
          <div className="allDialog">{Dialog}</div>
          <div className="sendDialog">
            <textarea className="writeSmsChat" name="" id=""></textarea>
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chats;
