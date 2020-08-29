import React from "react";

import { connect } from "react-redux";
import { banActiveUsers } from "store/users/actions";

import ServerActions from "./ServerActions";

function ServerActionsContainer(props) {
  const { banActiveUsers, ...rest } = props;
  return <ServerActions banActiveUsers={banActiveUsers} {...rest} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { banActiveUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerActionsContainer);
