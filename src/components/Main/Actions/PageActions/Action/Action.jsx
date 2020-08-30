import React, { useState } from "react";
import "./Action.scss";

export default function Action({
  BImage,
  animationClass,
  onClick,
  pauseOnLoad,
}) {
  const [isLoad, setLoad] = useState(!!pauseOnLoad);

  return (
    <div className="page-action">
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
