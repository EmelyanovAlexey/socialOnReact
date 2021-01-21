import React from "react";
import Chats from "./Chats.jsx";
import { addMassageActionCreater } from "./../../Redux/dialogsReducer.js";

const ChatsContainer = (props) => {
  let state = props.store.getState();

  let addMassage = (newMassageJson) => {
    props.store.dispatch(addMassageActionCreater(newMassageJson));
  };

  return (
    <Chats
      addMassage={addMassage}
      dataListDialogs={state.DialogsPage.dataListDialogs}
      dataDialog={state.DialogsPage.dataDialog}
      myId={state.ProfilePage.dataProfile.id}
    />
  );
};
export default ChatsContainer;
