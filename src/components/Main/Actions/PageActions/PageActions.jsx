import React from "react";
import "./PageActions.scss";

import Action from "./Action/Action";

import { ReactComponent as SVG_round } from "assets/icons/round.svg";
import { ReactComponent as SVG_sortAZ } from "assets/icons/sort_az.svg";
import { ReactComponent as SVG_alien } from "assets/icons/alien.svg";
import { ReactComponent as SVG_diskette } from "assets/icons/diskette.svg";

export default function PageActions(props) {
  const { clearActiveUsers, sortInactiveUsersAz } = props;

  return (
    <div className="page-actions-container">
      {/* <Action image={deleteUserIcon} /> */}
      <Action
        BImage={SVG_round}
        animationClass="page-action--rotate"
        clearActiveUsers={clearActiveUsers}
        onClick={clearActiveUsers}
      />
      <Action BImage={SVG_alien} animationClass="page-action--alien" />
      <Action BImage={SVG_diskette} animationClass="page-action--diskette" />
      <Action
        BImage={SVG_sortAZ}
        onClick={sortInactiveUsersAz}
        animationClass="page-action--shaking"
      />
    </div>
  );
}
