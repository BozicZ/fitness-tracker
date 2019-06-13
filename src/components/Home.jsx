import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul className="header-content">
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
      <h2>Fitness Tracker Home</h2>
    </div>
  );
}
