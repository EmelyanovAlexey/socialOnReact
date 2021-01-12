import React from "react";

import Dialogs from "./Dialogs/Dialogs.jsx";

import "./chats.css";

const Chats = () => {
  return (
    <div className="content">
      <div className="fullDialogs">
        <div className="listDialogs">
          <div className="searchDialogBlock">
            <input className="searchDialog" type="text" />
            <button> f </button>
          </div>

          <Dialogs
            linkImg="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg"
            textFIO="Емельянов Алексей Алексеевич"
            textTime="12.10.1998 12:18"
          />
          <Dialogs
            linkImg="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg"
            textFIO="rnj nj afadsf"
            textTime="12.10.1998 12:18"
          />
        </div>

        <div className="dialog">
          <div className="allDialog"></div>
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
