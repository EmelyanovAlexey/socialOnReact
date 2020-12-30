import "./App.css";
import "./mainStyle.css";

const App = () => {
  return (
    <>
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

      <section className="contentPage container">
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

        <div className="content">
          <div className="profile">
            <div className="avatar">
              <div className="photo">
                <img src="15291395435b24d157cb32d3.77251610-a2f.jpg" alt="" />
              </div>
              <div className="avatarBtn">
                <button className="noBtn editPhoto">изменить фото</button>
              </div>
            </div>
            <div className="info">
              <div className="fio">
                <h1>Емельянов Алексей Алексеевич</h1>
              </div>
              <div className="decorLine"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
