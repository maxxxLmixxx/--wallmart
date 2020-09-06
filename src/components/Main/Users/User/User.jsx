import React, {useState} from "react";

import { useDrag } from "react-dnd";
import { ItemTypes } from "utilities/items";
import styled from 'styled-components';

import "./User.scss";

export default React.memo(function User(props) {
  const { iconSRC, name, id, nickname } = props;
  const { isShift } = props;
  const { setUserActive, setUserInactive, isActive, isBanned } = props;

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

  const [clickProps, setClickProps] = useState({pageX: null, pageY: null});
  const ContextMenu = styled.div`
    position: fixed;
    top: ${clickProps.pageX};
    left: ${clickProps.pageY};
    
    width: 200px;
    height: 500px;
    background: white;
  `;
  const onRightClick = event => {
    console.log(event.pageX)
    event.preventDefault();

    // setClickProps({
    //   pageX: event.pageX,
    //   pageY: event.pageY,
    // })
  }

  return (
    <div
      className={`user ${isShift ? "active-user" : ""} ${
        isBanned ? "banned-status" : "unbanned-status"
      }`}
      ref={drag}
      style={{ opacity: isDragging ? 0.55 : 1 }}
      onClick={setActive}
      onContextMenu={onRightClick}
    >
      {/* {!!clickProps.pageX ? <ContextMenu /> : ''} */}

      <img
        src={
          iconSRC
            ? iconSRC
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR4xDiny0ZGQDUH9TcdMT_TAbvgiBePIa59w&usqp=CAU`
        }
        alt="user-icon"
        className="user-icon"
      />
      {/* <img src={icon} alt="user-icon" className="user-icon" /> */}
      <div className="user-description">
        <span>{name}</span>
        <br />
        <span>{nickname}</span>
        <br />
        <span>{id}</span>
        <br />
      </div>
    </div>
  );
});


