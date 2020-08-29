import React from "react";
import "./ServerActions.scss";

import Action from './Action/Action'

export default function ServerActions() {
  return (
    <div className="server-actions-container">
      <Action text="BAN" />
      <Action text="MUTE" />
      <Action text="UNMUTE"/>
      <Action text="KILL" />
      <Action />
      <Action />
      <Action />  
      <Action />
    </div>
  );
}
