import React from "react";

import MyPost from "./UserPost/MyPost.jsx";

import "./profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div className="profile">
        <div className="avatar">
          <div className="photo">
            <img
              src="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg"
              alt="photo"
            />
          </div>
          <div className="avatarBtn">
            <button className="noBtn editPhoto">изменить фото</button>
          </div>
        </div>
        <div className="infoBlock">
          <div className="info">
            <div className="fio">
              <h2>Емельянов Алексей Алексеевич</h2>
            </div>
            <div className="decorLine"></div>

            <div className="row between">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">Дата рождения:</span>{" "}
                  17.10.1998
                </h2>
              </div>
              <div className="city row center">
                <h2>
                  <span className="titleInfoLine">Город: </span> Новосибирск
                </h2>
              </div>
            </div>
            <div className="decorLine"></div>

            <div className="row">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">О себе:</span>
                  привет я такой-то такой-то, делаю то-то то-то, это если кратко
                  о себе!
                </h2>
              </div>
            </div>
            <div className="decorLine"></div>
          </div>

          <div className="writePost">
            <textarea className="writePostInput" name="" id=""></textarea>
            <button className="noBtn">Отправить</button>
          </div>
          <div className="myPosts">
            <MyPost textPost="первый пост" />
            <MyPost textPost="второй пост" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
