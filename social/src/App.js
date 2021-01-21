import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ChatContainer from "./components/Chats/ChatContainer.jsx";
import "./mainStyle.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <section className="contentPage container">
        <Menu />
        <Route
          path="/profile"
          render={() => <ProfileContainer store={props.store} />}
        />
        <Route
          path="/chats"
          render={() => <ChatContainer store={props.store} />}
        />
      </section>
    </BrowserRouter>
  );
};

export default App;
