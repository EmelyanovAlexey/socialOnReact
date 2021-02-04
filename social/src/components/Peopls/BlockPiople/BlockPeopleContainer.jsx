import BlockPiople from "./BlockPiople.jsx";
import { connect } from "react-redux";
import {
  followAC,
  unFollowAC,
  setUsersAC,
} from "../../../Redux/peoplsRebucer.js";

let mapStateToProps = (state) => {
  return {
    peopls: state.UsersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const SuperBlockPeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockPiople);

export default SuperBlockPeopleContainer;
