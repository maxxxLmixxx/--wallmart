import React from "react";
import "./Action.scss";

export default function Action({ image, text, animationClass, onClick }) {
  return (
    <div className="action">
      {!!image ? (
        <img
          draggable="false"
          src={image}
          alt={text ? text : "some-action"}
          className={animationClass}
          onClick={onClick}
        ></img>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
