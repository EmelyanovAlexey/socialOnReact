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
              dataProfile={props.state.ProfilePage.dataProfile}
              myPosts={props.state.ProfilePage.myPosts}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/chats"
          render={() => (
            <Chats
              dataListDialogs={props.state.DialogsPage.dataListDialogs}
              dataDialog={props.state.DialogsPage.dataDialog}
              myId={props.state.ProfilePage.dataProfile.id}
              dispatch={props.dispatch}
            />
          )}
        />
      </section>
    </BrowserRouter>
  );
};

export default App;
