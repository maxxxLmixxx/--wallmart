import React, { useState, useEffect } from "react";
import "./Action.scss";

export default function Action({
  BImage,
  animationClass,
  onClick,
  pauseOnLoad,
}) {
  const [isLoad, setLoad] = useState(!!pauseOnLoad);
  const [isClicked, setClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }, [isClicked]);

  return (
    <div
      className={`page-action ${isClicked ? "pg-action-click-animation" : ""}`}
      onClick={() => {
        onClick && onClick();
        setClicked(true);
      }}
    >
      {BImage && (
        <BImage
          onMouseOver={() => setLoad(false)}
          draggable="false"
          className={!isLoad ? animationClass : ""}
          onClick={onClick}
        />
      )}
      <span />
    </div>
  );
}
