import React from "react";
import "../styles/app.css";
import "../styles/home.css";
import "../styles/details.css";
import "../styles/fonts.css";

export default function App(props) {
  return <div className="app-content">{props.children}</div>;
}
