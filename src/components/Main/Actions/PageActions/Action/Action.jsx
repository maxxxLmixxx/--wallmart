import React from "react";
import "./Action.scss";

export default function Action({ BImage, animationClass, onClick }) {
  return (
    <div className="action">
      {BImage && (
        <BImage
          draggable="false"
          className={animationClass}
          onClick={onClick}
        />
      )}
      <span />
    </div>
  );
}
