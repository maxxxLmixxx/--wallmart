import React from "react";

import { connect } from "react-redux";
import { clearActiveUsers, sortInactiveUsersAz } from "store/users/actions";

import PageActions from "./PageActions";

function PageActionsContainer(props) {
  const { clearActiveUsers, sortInactiveUsersAz, ...rest } = props;
  return <PageActions clearActiveUsers={clearActiveUsers} sortInactiveUsersAz={sortInactiveUsersAz} {...rest} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { clearActiveUsers, sortInactiveUsersAz };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageActionsContainer);
