import React from "react";

import { useDrag } from "react-dnd";
import { ItemTypes } from "utilities/items";

import "./User.scss";

export default React.memo(function User(props) {
  const { icon, name, id, description = "..." } = props;
  const { isShift } = props;
  const { setUserActive, setUserInactive, isActive } = props;

  const setActive = ({ shiftKey }) => {
    if (!shiftKey) return;
    if (!isActive) setUserActive(id);
    else setUserInactive(id);
  };

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
    <div
      className={isShift ? "user active-user" : "user"}
      ref={drag}
      style={{ opacity: isDragging ? 0.55 : 1 }}
      onClick={setActive}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR4xDiny0ZGQDUH9TcdMT_TAbvgiBePIa59w&usqp=CAU"
        alt="user-icon"
        className="user-icon"
      />
      {/* <img src={icon} alt="user-icon" className="user-icon" /> */}
      <div className="user-description">
        <span>{name}</span>
        <span>{id}</span>
        <span>{description}</span>
      </div>
    </div>
  );
});
