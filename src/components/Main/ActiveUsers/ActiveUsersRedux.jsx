import React from "react";

import { connect } from "react-redux";
import { setUserActive } from "store/users/actions";

import ActiveUsers from "./ActiveUsers";

function ActiveUsersContainer(props) {
  const { users, setUserActive } = props;
  return <ActiveUsers users={users} setUserActive={setUserActive} />;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  setUserActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsersContainer);
