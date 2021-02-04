import Peopls from "./Peopls.jsx";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    peopls: state.UsersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SuperPeolsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Peopls);

export default SuperPeolsContainer;
