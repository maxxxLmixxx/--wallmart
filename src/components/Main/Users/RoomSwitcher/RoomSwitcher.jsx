import React from 'react'
import './RoomSwitcher.scss'

export default function RoomSwitcher(props) {
  const { rooms, filterByRoom } = props
  return (
    <div className="room-switches-container">
      {Object.keys(rooms).map((name) => {
        return (
          <div className="room-switch" onClick={() => filterByRoom(name)} key={name}>
            {(name[0] + name[name.length - 1]).toUpperCase()}
          </div>
        )
      })}
    </div>
  )
}
