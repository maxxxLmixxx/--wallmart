import React from "react";

import { connect } from "react-redux";

import ActiveUsers from "./ActiveUsers";

function ActiveUsersContainer(props) {
  const { users } = props;
  return <ActiveUsers users={users} />;
}

const mapStateToProps = (state) => {
  const { allUsers, activeUsersIds } = state.users;
  return {
    users: activeUsersIds.map(id => allUsers[id]),
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveUsersContainer);
