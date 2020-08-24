import React from "react";
import "./PageActions.scss";
import hole from "assets/icons/hole.svg";

import Action from "./Action/Action";

export default function PageActions(props) {
  const { clearActiveUsers } = props;

  return (
    <div className="page-actions-container">
      {/* <Action image={deleteUserIcon} /> */}
      <Action
        image={hole}
        clearActiveUsers={clearActiveUsers}
        onClick={clearActiveUsers}
      />
      <Action />
      <Action />
      <Action />
    </div>
  );
}
