import React from "react";
import "../styles/container.css";

export default function Container(props) {
  return (
    <div
      className="ft-container"
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor
      }}
    >
      {props.children}
    </div>
  );
}
