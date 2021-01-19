const ADD_CHAT_MASSAGE = "ADD_CHAT_MASSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAT_MASSAGE:
      state.dataDialog.push(action.newMassageJson);
      break;
    default:
      return state;
  }
  return state;
};

export const addMassageActionCreater = (newMassageJson) => {
  return {
    type: ADD_CHAT_MASSAGE,
    newMassageJson: newMassageJson,
  };
};

export default dialogsReducer;
