import React from "react";

import { connect } from "react-redux";
import { clearActiveUsers } from "store/users/actions";

import PageActions from "./PageActions";

function PageActionsContainer(props) {
  const { clearActiveUsers } = props;
  return <PageActions clearActiveUsers={clearActiveUsers} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { clearActiveUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageActionsContainer);
