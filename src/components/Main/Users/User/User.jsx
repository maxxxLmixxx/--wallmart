import React from "react";

import { useDrag } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./User.scss";

// const SwapItems = (_item, setSourceItems, setDestinationItems) => {
//   setSourceItems((items) => items.filter((item) => item.id !== _item.id));
//   setDestinationItems((items) => [...items, _item]);
// };

export default function User(props) {
  const { icon, name, id, description = "..." } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div class="user" ref={drag} style={{ opacity: isDragging ? 0.55 : 1 }}>
      <img src={icon} alt="user-icon" className="user-icon" />
      <div className="user-description">
        <span>{name}</span>
        <span>{id}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}
