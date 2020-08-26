import React from "react";
import "./PageActions.scss";

import Action from "./Action/Action";
import SVG_round from "assets/icons/round.svg";
import SVG_sortAZ from "assets/icons/sort_az.svg";

export default function PageActions(props) {
  const { clearActiveUsers, sortInactiveUsersAz } = props;

  return (
    <div className="page-actions-container">
      {/* <Action image={deleteUserIcon} /> */}
      <Action
        image={SVG_round}
        animationClass="page-action--rotate"
        clearActiveUsers={clearActiveUsers}
        onClick={clearActiveUsers}
      />
      <Action />
      <Action />
      <Action
        image={SVG_sortAZ}
        onClick={sortInactiveUsersAz}
        animationClass="page-action--shaking"
      />
    </div>
  );
}
