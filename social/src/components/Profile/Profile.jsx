import React from "react";

import MyPost from "./UserPost/MyPost.jsx";

import "./profile.css";

const Profile = () => {
  let dataProfile = {
    id: 1,
    status: 1,
    name: "Емельянов Алексей Алексеевич",
    dateBirth: "17.10.1998",
    city: "Новосибирск",
    description:
      "привет я такой-то такой-то, делаю то-то то-то, это если кратко о себе!",
    img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
  };

  let myPosts = [
    { id: 1, text: "первый пост", postData: "12.12.2020 14:22" },
    { id: 2, text: "второй пост", postData: "12.10.2020 08:20" },
    { id: 3, text: "третий пост", postData: "12.08.2020 16:30" },
    { id: 3, text: "третий пост", postData: "12.08.2020 16:30" },
  ];

  let myPost = myPosts.map((post) => (
    <MyPost textPost={post.text} idPost={post.id} postData={post.postData} />
  ));

  return (
    <div className="content">
      <div className="profile">
        <div className="avatar">
          <div className="photo">
            <img src={dataProfile.img} alt="photo" />
          </div>
          <div className="avatarBtn">
            <button className="noBtn editPhoto">изменить фото</button>
          </div>
        </div>
        <div className="infoBlock">
          <div className="info">
            <div className="fio">
              <h2>{dataProfile.name}</h2>
            </div>
            <div className="decorLine"></div>

            <div className="row between">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">Дата рождения:</span>{" "}
                  {dataProfile.dateBirth}
                </h2>
              </div>
              <div className="city row center">
                <h2>
                  <span className="titleInfoLine">Город: </span>{" "}
                  {dataProfile.city}
                </h2>
              </div>
            </div>
            <div className="decorLine"></div>

            <div className="row">
              <div className="dateOfBirth row center">
                <h2>
                  <span className="titleInfoLine">О себе:</span>
                  {dataProfile.description}
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
