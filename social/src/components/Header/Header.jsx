import React from 'react';
import './header.css';

const Header = () => {
    return (
    <section className="header">
        <div className="container">
          <div className="headerContent">
            <a className="logo">
              <img src="img/logo.png" alt="logo" />
            </a>

            <div className="exit">
              <button className="btn">Выход</button>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Header;