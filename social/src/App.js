import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ChatContainer from "./components/Chats/ChatContainer.jsx";
import Peopls from "./components/Peopls/Peopls.jsx";
import "./mainStyle.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <section className="contentPage container">
        <Menu />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/chats" render={() => <ChatContainer />} />
        <Route path="/peopls" render={() => <Peopls />} />
      </section>
    </BrowserRouter>
  );
};

export default App;
