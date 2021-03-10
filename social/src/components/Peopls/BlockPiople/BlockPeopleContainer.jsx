import BlockPiople from "./BlockPiople.jsx";
import { connect } from "react-redux";
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurranrPageAC,
  setTotalUserCountAC,
} from "../../../Redux/peoplsRebucer.js";

let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUserCount,
    currentPage: state.UsersPage.currentPage,
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
    setCurranrPage: (currentPage) => {
      dispatch(setCurranrPageAC(currentPage));
    },
    setTotalUserCount: (totalUserCount) => {
      dispatch(setTotalUserCountAC(totalUserCount));
    },
  };
};

const SuperBlockPeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockPiople);

export default SuperBlockPeopleContainer;
