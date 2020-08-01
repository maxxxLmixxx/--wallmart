import React from 'react'

import { useDrop } from 'react-dnd'
import { ItemTypes } from 'utilities/items'

import './Users.scss'
import SearchUsers from './SearchUsers/SearchUsersRedux'
import User from './User/User'

export default function Users(props) {
  const { users, filterValue, setUserInactive } = props
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => setUserInactive(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })
  return (
    <div className={`users-container ${isOver ? 'droppable--inactive' : ''}`} ref={drop}>
      <SearchUsers placeholder="Find user..." />
      <div className="users-block">
        {Object.values(users)
          .filter(({ name }) => name.startsWith(filterValue))
          .map(({ name, id, icon }) => (
            <User name={name} key={id} id={id} icon={icon} />
          ))}
      </div>
    </div>
  )
}
