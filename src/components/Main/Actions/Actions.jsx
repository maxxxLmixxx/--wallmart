import React from "react";
import "./Actions.scss";

import ServerActions from "./ServerActions/ServerActionsRedux";
import PageActions from "./PageActions/PageActionsRedux";

export default function Actions() {
  return (
    <div className="actions-container">
      <ServerActions />
      <PageActions />
    </div>
  );
}
