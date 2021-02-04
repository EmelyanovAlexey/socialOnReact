import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import peoplsRebucer from "./peoplsRebucer.js";

let reducers = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogsReducer,
  UsersPage: peoplsRebucer,
});

let store = createStore(reducers);

export default store;
