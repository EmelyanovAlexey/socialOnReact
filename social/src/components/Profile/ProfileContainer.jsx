import React from "react";
import Profile from "./Profile.jsx";
import { AddPostActionCreater } from "../../Redux/profileReducer.js";

const ProfileContainer = (props) => {
  let state = props.store.getState();

  let addMyPost = (newPostJson) => {
    props.store.dispatch(AddPostActionCreater(newPostJson));
  };

  // рендер
  return (
    <Profile
      AddPost={addMyPost}
      dataProfile={state.ProfilePage.dataProfile}
      myPosts={state.ProfilePage.myPosts}
    />
  );
};
export default ProfileContainer;
