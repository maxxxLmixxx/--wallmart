import React from "react";

import { connect } from "react-redux";
import { setUserActive } from "store/users/actions";

import User from "./User";

function UserRedux(props) {
  const { setUserActive, ...rest } = props;
  return <User setUserActive={setUserActive} {...rest} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setUserActive };

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
