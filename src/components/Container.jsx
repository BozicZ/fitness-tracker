import React from "react";
import "../styles/container.css";

export default function Container(props) {
  return (
    <div
      className={`ft-container ${props.background} ${props.active} ${
        props.size
      } ${props.screen}`}
    >
      {props.children}
    </div>
  );
}
