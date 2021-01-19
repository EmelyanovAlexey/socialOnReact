const ADD_CHAT_MASSAGE = "ADD_CHAT_MASSAGE";

let initialState = {
  dataListDialogs: [
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
  ],
  dataDialog: [
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
  ],
};

const dialogsReducer = (state = initialState, action) => {
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
