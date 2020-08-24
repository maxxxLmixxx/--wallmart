import React from "react";
import "./Action.scss";

export default function Action({ image, text, ...rest }) {
  return (
    <div className="action" {...rest}>
      {!!image ? (
        <img draggable="false" src={image}></img>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
