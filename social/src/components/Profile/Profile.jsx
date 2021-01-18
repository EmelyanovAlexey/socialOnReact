import React from "react";

import MyPost from "./UserPost/MyPost.jsx";

import "./profile.css";

const Profile = (props) => {
  let myPost = props.myPosts.map((post) => (
    <MyPost textPost={post.text} idPost={post.id} postData={post.postData} />
  ));

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
            <textarea className="writePostInput" name="" id=""></textarea>
            <button className="noBtn">Отправить</button>
          </div>
          <div className="myPosts">{myPost}</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
