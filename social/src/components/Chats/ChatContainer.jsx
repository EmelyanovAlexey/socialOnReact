import React from "react";
import Chats from "./Chats.jsx";
import { connect } from "react-redux";
import { addMassageActionCreater } from "./../../Redux/dialogsReducer.js";

// const ChatsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addMassage = (newMassageJson) => {
//           store.dispatch(addMassageActionCreater(newMassageJson));
//         };

//         return (
//           <Chats
//             addMassage={addMassage}
//             dataListDialogs={state.DialogsPage.dataListDialogs}
//             dataDialog={state.DialogsPage.dataDialog}
//             myId={state.ProfilePage.dataProfile.id}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dataListDialogs: state.DialogsPage.dataListDialogs,
    dataDialog: state.DialogsPage.dataDialog,
    myId: state.ProfilePage.dataProfile.id,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMassage: (newMassageJson) => {
      dispatch(addMassageActionCreater(newMassageJson));
    },
  };
};

const SuperChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default SuperChatsContainer;
