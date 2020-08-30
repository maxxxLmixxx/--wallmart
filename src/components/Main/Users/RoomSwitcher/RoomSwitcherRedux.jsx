import React from 'react'

import { connect } from 'react-redux'
import { filterByRoom } from 'store/users/actions'

import RoomSwitcher from './RoomSwitcher'

function RoomSwitcherContainer(props) {
  const { rooms, ...rest } = props
  return <RoomSwitcher rooms={rooms} {...rest} />
}

const mapStateToProps = (state) => {
  const { rooms } = state.users
  return {
    rooms,
  }
}

const mapDispatchToProps = { filterByRoom }

export default connect(mapStateToProps, mapDispatchToProps)(RoomSwitcherContainer)
