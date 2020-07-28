import React from "react";

import { useDrop } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./ActiveUsers.scss";

export default function ActiveUsers() {
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => console.log('yei'),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });
  return <div class="activeUsers-container" ref={drop} style={{ background: isOver ? 'blue' : 'red' }}></div>;
}
