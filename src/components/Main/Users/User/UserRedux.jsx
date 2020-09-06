import React from "react";

import { connect } from "react-redux";
import { setUserActive, setUserInactive } from "store/users/actions";

import User from "./User";

function UserRedux(props) {
  const { setUserActive, setUserInactive, ...rest } = props;
  return <User setUserActive={setUserActive} setUserInactive={setUserInactive} {...rest} />;
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = { setUserActive, setUserInactive };

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
