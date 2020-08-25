import React from "react";

import { connect } from "react-redux";
import { setUserActive, setUserInactive } from "store/users/actions";

import ActiveUsers from "./ActiveUsers";

function ActiveUsersContainer(props) {
  const { users, inactiveUsersIds, setUserActive, ...rest } = props;
  return (
    <ActiveUsers
      users={users}
      inactiveUsersIds={inactiveUsersIds}
      setUserActive={setUserActive}
      {...rest}
    />
  );
}

const mapStateToProps = (state) => {
  const { allUsers, inactiveUsersIds, activeUsersIds } = state.users;
  return {
    users: activeUsersIds.map((id) => allUsers[id]),
    inactiveUsersIds,
  };
};

const mapDispatchToProps = { setUserActive };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveUsersContainer);
