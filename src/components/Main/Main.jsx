import React from "react";
import "./Main.scss";

import Users from "./Users/Users";
import Actions from "./Actions/Actions";
import ActiveUsers from "./ActiveUsers/ActiveUsers";

export default function Main() {
  return (
    <main className="main-container">
      <Users />
      <ActiveUsers/>
      <Actions />
    </main>
  );
}
