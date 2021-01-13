import React from "react";

import Dialogs from "./Dialogs/Dialogs.jsx";
import BlockDialog from "./BlockDialog/BlockDialog.jsx";

import "./chats.css";

const Chats = () => {
  let dataListDialogs = [
    {
      id: 1,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 2,
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 1,
    },
    {
      id: 3,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 0,
    },
  ];

  let dataDialog = [
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
    {
      id: 1,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasdasasad",
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
  ];

  let myId = 1;

  let listDialogs = dataListDialogs.map((d) => (
    <Dialogs
      id={d.id}
      img={d.img}
      name={d.name}
      textData={d.textData}
      rider={d.rider}
    />
  ));

  let Dialog = dataDialog.map((d) => (
    <BlockDialog
      id={d.id}
      myId={myId}
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
