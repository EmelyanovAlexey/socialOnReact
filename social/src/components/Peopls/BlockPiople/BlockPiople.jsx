import React from "react";
import "./blockPiople.css";

const BlockPiople = (props) => {
  debugger;
  return (
    <div className="list-peopls">
      {props.peopls.map((u) => (
        <div className="block" key={u.id} id={u.id}>
          <div className="photo">
            <img
              src="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg"
              alt="photo"
            />
          </div>
          <div className="info">
            <div className="text">
              <h3 className="name">{u.name}</h3>
              <h4 className="year">возраст {u.dateBirth}</h4>
            </div>
            <div className="dopInfo {if (isInfoShown) dopInfohide}">
              <h4>город: {u.city}</h4>
              <h4>дата рождения: {u.dateBirth}</h4>
            </div>
            <div className="btns">
              {!u.follow ? (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                  className="noBtn"
                >
                  добавить в друзья
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                  className="noBtn"
                >
                  удалить из друзей
                </button>
              )}
              <button className="noBtn">подробнее</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlockPiople;

// function yearUser(data) {
//   let today = new Date();
//   let dateBirth = data.split(".");
//   if (
//     today.getMonth() + 1 == parseInt(dateBirth[1]) &&
//     today.getMonth() + 1 < parseInt(dateBirth[0])
//   ) {
//     return parseInt(today.getFullYear()) - parseInt(dateBirth[2]) - 1;
//   } else if (today.getMonth() + 1 < parseInt(dateBirth[1])) {
//     return parseInt(today.getFullYear()) - parseInt(dateBirth[2]) - 1;
//   } else {
//     return parseInt(today.getFullYear()) - parseInt(dateBirth[2]);
//   }
// }

// let only = "";
// if (props.peopls.only) {
//   only = <div className="icoOnly"></div>;
// }
