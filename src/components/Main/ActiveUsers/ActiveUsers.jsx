import React, { useState } from "react";
import useKey from "utilities/customHooks/useKey";

import { useDrop } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./ActiveUsers.scss";
import User from "../Users/User/UserRedux";

export default function ActiveUsers(props) {
  const { users, inactiveUsersIds, setUserActive } = props;
  const [{ isOver, item }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => setUserActive(item.id),
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
      className={`activeUsers-container  ${
        isOver && inactiveUsersIds.includes(item?.id) ? "droppable--active" : ""
      }`}
      ref={drop}
    >
      {Object.values(users).map(({ name, id, icon }) => (
        <User
          name={name}
          key={id}
          id={id}
          icon={icon}
          isShift={isShift}
          isActive={true}
        />
      ))}
    </div>
  );
}
