const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";

let initialState = {
  users: [],
  pageSize: 100,
  totalUserCount: 1000,
  currentPage: 1,
};

const peoplsRebucer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((p) => {
          if (p.id === action.userId) {
            return { ...p, followed: true };
          }
          return p;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((p) => {
          if (p.id === action.userId) {
            return { ...p, followed: false };
          }
          return p;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] }; //...state.users,
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }; //...state.users,
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUserCount: action.totalUserCount }; //...state.users,
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

export const setCurranrPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUserCountAC = (totalUserCount) => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUserCount,
  };
};

export default peoplsRebucer;
