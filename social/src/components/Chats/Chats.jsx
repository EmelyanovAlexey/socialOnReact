import React from "react";
import Dialogs from "./Dialogs/Dialogs.jsx";
import BlockDialog from "./BlockDialog/BlockDialog.jsx";
import "./chats.css";
import { addMassageActionCreater } from "./../../Redux/dialogsReducer.js";

const Chats = (props) => {
  // переменные
  let newMassageElement = React.createRef();

  // функции
  let listDialogs = props.dataListDialogs.map((d) => (
    <Dialogs
      id={d.id}
      key={d.id}
      img={d.img}
      name={d.name}
      textData={d.textData}
      rider={d.rider}
    />
  ));

  let Dialog = props.dataDialog.map((d) => (
    <BlockDialog
      id={d.id}
      key={d.id}
      myId={props.myId}
      img={d.img}
      name={d.name}
      textData={d.textData}
      text={d.text}
    />
  ));

  let addMassage = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "." +
      String(today.getMonth() + 1).padStart(2, "0") +
      "." +
      String(today.getDate()).padStart(2, "0") +
      " " +
      String(today.getHours()).padStart(2, "0") +
      ":" +
      String(today.getMinutes()).padStart(2, "0");

    let newMassageJson = {
      id: props.myId,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: date,
      text: newMassageElement.current.value,
    };
    props.addMassage(newMassageJson);
    newMassageElement.current.value = "";
  };

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
            <textarea
              className="writeSmsChat"
              ref={newMassageElement}
            ></textarea>
            <button onClick={addMassage}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chats;
