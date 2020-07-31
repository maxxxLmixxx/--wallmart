import React from "react";

import { connect } from "react-redux";

import Users from "./Users";

function UsersRedux(props) {
  const { users } = props;
  return <Users users={users} />;
}

const mapStateToProps = (state) => {
  const { allUsers, inactiveUsersIds } = state.users;
  return {
    users: inactiveUsersIds.map(id => allUsers[id]),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);
