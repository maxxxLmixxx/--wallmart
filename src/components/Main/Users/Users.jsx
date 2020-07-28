import React from "react";
import "./Users.scss";

import SearchUsers from "./SearchUsers/SearchUsers";
import User from "./User/User";

const USERS = [
  { name: "Mike1", id: "11", icon: "" },
  { name: "Mike2", id: "12", icon: "" },
  { name: "Mike3", id: "13", icon: "" },
  { name: "Mike4", id: "14", icon: "" },
  { name: "Mike5", id: "15", icon: "" },
  { name: "Mike6", id: "16", icon: "" },
  { name: "Mike7", id: "17", icon: "" },
  { name: "Mike8", id: "18", icon: "" },
  { name: "Mike9", id: "19", icon: "" },
  { name: "Mike10", id: "20", icon: "" },
  { name: "Mike11", id: "21", icon: "" },
  { name: "Mike12", id: "22", icon: "" },
  { name: "Mike13", id: "23", icon: "" },
  { name: "Mike14", id: "24", icon: "" },
  { name: "Mike15", id: "25", icon: "" },
  { name: "Mike16", id: "26", icon: "" },
  { name: "Mike17", id: "27", icon: "" },
  { name: "Mike18", id: "28", icon: "" },
  { name: "Mike19", id: "29", icon: "" },
  { name: "Mike20", id: "30", icon: "" },
  { name: "Mike21", id: "31", icon: "" },
  { name: "Mike22", id: "32", icon: "" },
  { name: "Mike23", id: "33", icon: "" },
  { name: "Mike24", id: "34", icon: "" },
  { name: "Mike25", id: "35", icon: "" },
  { name: "Mike26", id: "36", icon: "" },
  { name: "Mike27", id: "37", icon: "" },
  { name: "Mike28", id: "38", icon: "" },
  { name: "Mike29", id: "39", icon: "" },
  { name: "Mike30", id: "40", icon: "" },
  { name: "Mike31", id: "41", icon: "" },
  { name: "Mike32", id: "42", icon: "" },
  { name: "Mike33", id: "43", icon: "" },

];

export default function Users() {
  return (
    <div class="users-container">
      <SearchUsers placeholder="Find user..." />
      <div class="users-block">
        {USERS.map(({ name, id, icon }) => (
          <User name={name} key={id} id={id} icon={icon} />
        ))}
      </div>
    </div>
  );
}
