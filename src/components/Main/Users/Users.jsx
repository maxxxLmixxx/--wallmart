import React from "react";
import "./Users.scss";

import SearchUsers from "./SearchUsers/SearchUsers";
import User from "./User/User";

export default function Users(props) {
  const { users } = props;

  return (
    <div class="users-container">
      <SearchUsers placeholder="Find user..." />
      <div class="users-block">
        {Object.values(users)
          .map(({ name, id, icon }) => (
            <User name={name} key={id} id={id} icon={icon} />
          ))}
      </div>
    </div>
  );
}
