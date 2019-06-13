import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div>
      <ul className="header-content">
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <h2>Fitness Tracker Details</h2>
    </div>
  );
}
