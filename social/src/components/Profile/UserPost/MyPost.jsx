import React from 'react';
import './myPost.css';

const MyPost = (props) => {
    return (
      <div className="blockPost row">
        <div className="imgUserPost">
          <img src="https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg" alt="photo" />
        </div>
        <div className="infoUserPost column between">
          <h3 className="postText">{props.textPost}</h3>
          <p className="dataPost">14.15.2200</p>
        </div>
      </div>
    );
}
export default MyPost;