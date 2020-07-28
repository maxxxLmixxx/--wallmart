import React from "react";
import "./Main.scss";

import Users from "./Users/UsersRedux";
import ActiveUsers from "./ActiveUsers/ActiveUsersRedux";
import Actions from "./Actions/Actions";

export default function Main() {
  return (
    <main className="main-container">
      <Users />
      <ActiveUsers />
      <Actions />
    </main>
  );
}
