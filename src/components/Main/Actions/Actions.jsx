import React from "react";
import "./Actions.scss";

import ServerActions from "./ServerActions/ServerActions";
import PageActions from "./PageActions/PageActions";

export default function Actions() {
  return (
    <div className="actions-container">
      <ServerActions />
      <PageActions />
    </div>
  );
}
