import React from "react";
import "./blockPiople.css";
import * as axios from "axios";

class BlockPiople extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className="content">
        <div className="peopls">
          <div className="filter">
            <div className="row">
              <input type="text" placeholder="поиск" />
              <button className="noBtn">поиск</button>
            </div>
          </div>

          <div className="list-peopls">
            {this.props.users.map((u) => (
              <div className="block" key={u.id} id={u.id}>
                <div className="photo">
                  <img
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "img/image/photo.jpg"
                    }
                    alt="photo"
                  />
                </div>
                <div className="info">
                  <div className="text">
                    <h3 className="name">{u.name}</h3>
                    {/* <h4 className="year">{u.status}</h4> */}
                  </div>
                  {/* <div className="dopInfo {if (isInfoShown) dopInfohide}">
              <h4>город: {u.city}</h4>
              <h4>дата рождения: {u.dateBirth}</h4>
            </div> */}
                  <div className="btns">
                    {!u.followed ? (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
                        }}
                        className="noBtn"
                      >
                        добавить в друзья
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.unFollow(u.id);
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
        </div>
      </div>
    );
  }
}

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
