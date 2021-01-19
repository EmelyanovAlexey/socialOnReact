const ADD_MY_POST = "ADD_MY_POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_MY_POST:
      state.myPosts.push(action.newPostJson);
      break;
    default:
      return state;
  }
  return state;
};

export const AddPostActionCreater = (newPostJson) => {
  return {
    type: ADD_MY_POST,
    newPostJson: newPostJson,
  };
};

export default profileReducer;
