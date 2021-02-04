import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="profile"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/user.svg" alt="ico" />
        <p>Профиль</p>
      </NavLink>
      <NavLink
        to="news"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/newspaper.svg" alt="ico" />
        <p>Новости</p>
      </NavLink>
      <NavLink
        to="chats"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/sms.svg" alt="ico" />
        <p>Сообщения</p>
      </NavLink>
      <NavLink
        to="friends"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/friends.svg" alt="ico" />
        <p>друзья</p>
      </NavLink>
      <NavLink
        to="peopls"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/friend.svg" alt="ico" />
        <p>люди</p>
      </NavLink>
      <NavLink
        to="settings"
        activeClassName="menuBlockActive"
        className="menuBlock"
      >
        <img src="img/ico/gear.svg" alt="ico" />
        <p>настройки</p>
      </NavLink>
    </div>
  );
};

export default Menu;
