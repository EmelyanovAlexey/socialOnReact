import React from "react";
import "./myPost.css";

const MyPost = (props) => {
  return (
    <div className="blockPost row" id={"myPost" + props.idPost}>
      <div className="imgUserPost">
        <img
          src="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg"
          alt="photo"
        />
      </div>
      <div className="infoUserPost column between">
        <h4 className="postName">{props.name}</h4>
        <h3 className="postText">{props.textPost}</h3>
        <p className="dataPost">{props.postData}</p>
      </div>
    </div>
  );
};
export default MyPost;
