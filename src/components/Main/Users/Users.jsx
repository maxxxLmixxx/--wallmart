import React, { useState } from "react";
import useKey from "utilities/customHooks/useKey";

import { useDrop } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./Users.scss";
import SearchUsers from "./SearchUsers/SearchUsersRedux";
import RoomSwitcher from "./RoomSwitcher/RoomSwitcher";
import User from "./User/UserRedux";

export default function Users(props) {
  const { users, activeUsersIds, filterValue, setUserInactive } = props;
  const [{ isOver, item }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => setUserInactive(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
  });

  const [isShift, setShift] = useState(false);
  useKey("ShiftLeft", () => setShift(true), "keydown");
  useKey("ShiftLeft", () => setShift(false), "keyup");

  return (
    <div
      className={`users-container ${
        isOver && activeUsersIds.includes(item?.id) ? "droppable--inactive" : ""
      }`}
      ref={drop}
    >
      <div className="users--header">
        <SearchUsers placeholder="Find user..." />
        <RoomSwitcher />
      </div>
      <div className="users--main">
        {Object.values(users)
          .filter(({ name }) => name.startsWith(filterValue))
          .map(({ name, id, icon, banned }) => (
            <User
              name={name}
              key={id}
              id={id}
              isBanned={banned}
              icon={icon}
              isShift={isShift}
              isActive={false}
            />
          ))}
      </div>
    </div>
  );
}
