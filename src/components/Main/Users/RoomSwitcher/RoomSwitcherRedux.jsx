import React from "react";

import { connect } from "react-redux";
import { filterByRoom, changeActiveRoom } from "store/users/actions";

import RoomSwitcher from "./RoomSwitcher";

function RoomSwitcherContainer(props) {
  const { rooms, activeRoom, changeActiveRoom, ...rest } = props;
  return (
    <RoomSwitcher
      rooms={rooms}
      activeRoom={activeRoom}
      changeActiveRoom={changeActiveRoom}
      {...rest}
    />
  );
}

const mapStateToProps = (state) => {
  const { rooms, activeRoom } = state.users;
  return {
    rooms,
    activeRoom,
  };
};

const mapDispatchToProps = { filterByRoom, changeActiveRoom };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomSwitcherContainer);
