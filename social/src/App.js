import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Chats from "./components/Chats/Chats.jsx";
import "./mainStyle.css";

const App = () => {
  return (
    <>
      <Header />

      <section className="contentPage container">
        <Menu />
        {
          //<Profile />
        }
        <Profile />
        {
          //<Chats />
        }
      </section>
    </>
  );
};

export default App;
