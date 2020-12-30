import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className="menu">
          <a href="" className="menuBlock">
            <img src="img/ico/user.svg" alt="ico" />
            <p>Профиль</p>
          </a>
          <a href="" className="menuBlock">
            <img src="img/ico/newspaper.svg" alt="ico" />
            <p>Новости</p>
          </a>
          <a href="" className="menuBlock">
            <img src="img/ico/sms.svg" alt="ico" />
            <p>Сообщения</p>
          </a>
          <a href="" className="menuBlock">
            <img src="img/ico/friend.svg" alt="ico" />
            <p>друзья</p>
          </a>
          <a href="" className="menuBlock">
            <img src="img/ico/gear.svg" alt="ico" />
            <p>настройки</p>
          </a>
        </div>
    );
}

export default Menu;