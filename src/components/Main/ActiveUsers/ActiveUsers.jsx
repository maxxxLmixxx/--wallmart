import React from "react";

import { useDrop } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./ActiveUsers.scss";
import User from "../Users/User/User";

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
  return (
    <div
      className={`activeUsers-container  ${
        isOver && inactiveUsersIds.includes(item?.id) ? "droppable--active" : ""
      }`}
      ref={drop}
    >
      {Object.values(users).map(({ name, id, icon }) => (
        <User name={name} key={id} id={id} icon={icon} />
      ))}
    </div>
  );
}
