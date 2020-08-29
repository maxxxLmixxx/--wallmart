import React from 'react'
import './ServerActions.scss'

import Action from './Action/Action'

export default function ServerActions({banActiveUsers}) {
  return (
    <div className="server-actions-container">
      <Action text="BAN" onClick={banActiveUsers} />
      <Action text="MUTE" />
      <Action text="UNMUTE" />
      <Action text="KILL" />
    </div>
  )
}
