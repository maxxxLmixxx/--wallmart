import React from "react";
import "./RoomSwitcher.scss";

export default function RoomSwitcher(props) {
  const { rooms, activeRoom, filterByRoom, changeActiveRoom } = props;
  return (
    <div className="room-switches-container">
      {Object.keys(rooms).map((name) => {
        const isActive = name === activeRoom;
        return (
          <div
            className={"room-switch " + (isActive ? "active-room" : "")}
            onClick={() => {
              filterByRoom(name);
              changeActiveRoom(name);
            }}
            key={name}
          >
            {(name[0] + name[name.length - 1]).toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
