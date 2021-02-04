const ADD_MY_POST = "ADD_MY_POST";

let initialState = {
  dataProfile: {
    id: 1,
    status: 1,
    name: "Емельянов Алексей Алексеевич",
    dateBirth: "17.10.1998",
    city: "Новосибирск",
    description:
      "привет я такой-то такой-то, делаю то-то то-то, это если кратко о себе!",
    img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
  },
  myPosts: [
    {
      id: 1,
      idUser: 1,
      name: "Емельянов АА",
      text: "первый пост",
      postData: "12.12.2020 14:22",
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_MY_POST:
      stateCopy.myPosts = [...state.myPosts];
      stateCopy.myPosts.push(action.newPostJson);
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const AddPostActionCreater = (newPostJson) => {
  return {
    type: ADD_MY_POST,
    newPostJson: newPostJson,
  };
};

export default profileReducer;
