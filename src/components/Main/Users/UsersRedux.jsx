import React from "react";

import { connect } from "react-redux";

import Users from "./Users";

function UsersRedux(props) {
  const { users, filterValue } = props;
  return <Users users={users} filterValue={filterValue} />;
}

const mapStateToProps = (state) => {
  const { allUsers, inactiveUsersIds, filterValue } = state.users;
  return {
    users: inactiveUsersIds.map((id) => allUsers[id]),
    filterValue,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);
