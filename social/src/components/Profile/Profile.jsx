import React from "react";
import MyPost from "./UserPost/MyPost.jsx";
import "./profile.css";
import { AddPostActionCreater } from "../../Redux/profileReducer.js";

const Profile = (props) => {
  // переменные
  let newPostElement = React.createRef();
  // функции
  let myPost = props.myPosts.map((post) => (
    <MyPost
      name={post.name}
      key={post.id}
      textPost={post.text}
      idPost={post.id}
      postData={post.postData}
    />
  ));

  let addMyPost = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "." +
      String(today.getMonth() + 1).padStart(2, "0") +
      "." +
      String(today.getDate()).padStart(2, "0") +
      " " +
      String(today.getHours()).padStart(2, "0") +
      ":" +
      String(today.getMinutes()).padStart(2, "0");

    let newPostJson = {
      id: 4,
      idUser: props.dataProfile.id,
      name: props.dataProfile.name,
      text: newPostElement.current.value,
      postData: date,
    };
    props.addMyPost(newPostJson);
    newPostElement.current.value = "";
  };

  // рендер
  return (
    <div className="content">
      <div className="profile">
        <div className="avatar">
          <div className="photo">
            <img src={props.dataProfile.img} alt="photo" />
          </div>
          <div className="avatarBtn">
            <button className="noBtn editPhoto">изменить фото</button>
          </div>
        </div>
        <div className="infoBlock">
          <div className="info">
            <div className="fio">
              <h2>{props.dataProfile.name}</h2>
            </div>
            <div className="decorLine"></div>

            <div className="row between">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">Дата рождения:</span>{" "}
                  {props.dataProfile.dateBirth}
                </h2>
              </div>
              <div className="city row center">
                <h2>
                  <span className="titleInfoLine">Город: </span>{" "}
                  {props.dataProfile.city}
                </h2>
              </div>
            </div>
            <div className="decorLine"></div>

            <div className="row">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">О себе:</span>
                  {props.dataProfile.description}
                </h2>
              </div>
            </div>
            <div className="decorLine"></div>
          </div>

          <div className="writePost">
            <textarea
              className="writePostInput"
              ref={newPostElement}
            ></textarea>
            <button className="noBtn" onClick={addMyPost}>
              Отправить
            </button>
          </div>
          <div className="myPosts">{myPost}</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
