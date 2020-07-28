import React from "react";

import { useDrop } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./ActiveUsers.scss";
import User from '../Users/User/User'

export default function ActiveUsers(props) {
  const { users, setUserActive } = props;
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => setUserActive(item.id, true),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div
      className="activeUsers-container"
      ref={drop}
      style={{ background: isOver ? "blue" : "red" }}
    >
      {users
        .filter(({ active }) => active === true)
        .map(({ name, id, icon }) => (
          <User name={name} key={id} id={id} icon={icon} />
        ))}
    </div>
  );
}
