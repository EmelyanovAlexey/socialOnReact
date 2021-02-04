const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      name: "Емельянов Алексей Алексеевич 1 ",
      dateBirth: "17.10.1998",
      city: "Новосибирск",
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      only: true,
      follow: true,
    },
    {
      id: 2,
      name: "Емельянов Алексей Алексеевич 2 ",
      dateBirth: "17.10.1998",
      city: "Новосибирск",
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      only: false,
      follow: false,
    },
  ],
};

const peoplsRebucer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((p) => {
          if (p.id === action.userId) {
            debugger;
            return { ...p, follow: true };
          }
          return p;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((p) => {
          if (p.id === action.userId) {
            return { ...p, follow: false };
          }
          return p;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unFollowAC = (userId) => {
  return {
    type: UN_FOLLOW,
    userId: userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default peoplsRebucer;
