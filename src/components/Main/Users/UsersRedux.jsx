import React from "react";

import { connect } from "react-redux";
import { setUserActive } from "store/users/actions";

import Users from "./Users";

function UsersRedux(props) {
  const { users, setUserActive } = props;
  return <Users users={users} setUserActive={setUserActive} />;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  setUserActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);
