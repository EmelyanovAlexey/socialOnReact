import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Chats from "./components/Chats/Chats.jsx";
import "./mainStyle.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <section className="contentPage container">
        <Menu />
        <Route
          path="/profile"
          render={() => (
            <Profile
              dataProfile={props.BD.dataProfile}
              myPosts={props.BD.myPosts}
            />
          )}
        />
        <Route
          path="/chats"
          render={() => (
            <Chats
              dataListDialogs={props.BD.dataListDialogs}
              dataDialog={props.BD.dataDialog}
              myId={props.BD.dataProfile.id}
            />
          )}
        />
      </section>
    </BrowserRouter>
  );
};

export default App;
