import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Chats from "./components/Chats/Chats.jsx";
import "./mainStyle.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <section className="contentPage container">
        <Menu />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/chats" render={() => <Chats />} />
      </section>
    </BrowserRouter>
  );
};

export default App;
