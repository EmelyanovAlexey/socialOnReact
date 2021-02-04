import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { AddPostActionCreater } from "../../Redux/profileReducer.js";

let mapStateToProps = (state) => {
  return {
    dataProfile: state.ProfilePage.dataProfile,
    myPosts: state.ProfilePage.myPosts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMyPost: (newPostJson) => {
      dispatch(AddPostActionCreater(newPostJson));
    },
  };
};

const SuperProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default SuperProfileContainer;
