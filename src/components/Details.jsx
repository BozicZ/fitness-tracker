import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "../styles/home.css";

const ftDays = [
  { num: 4, name: "MON" },
  { num: 5, name: "TUE" },
  { num: 6, name: "WED" },
  { num: 7, name: "THU" },
  { num: 8, name: "FRI" }
];

export default function Details() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <Container backgroundColor={"rgba(255, 255, 255, 0.2)"}>
        <div className="ft-info">
          <div>
            <h1>Tuesday!</h1>
            <p>June 21, 2019.</p>
          </div>
        </div>
      </Container>
      <div className="ft-days">
        {ftDays.map(day => {
          return (
            <Container backgroundColor={"rgba(255, 255, 255, 0.2)"}>
              <div className="ft-day">
                <p>{day.num}</p>
                <p>{day.name}</p>
              </div>
            </Container>
          );
        })}
      </div>
      <Container backgroundColor={"#fff"}>
        <div className="ft-details-main">
          <div className="ft-circle">
            <p>Steps</p>
            <h1>7,542</h1>
          </div>
          <div>
            <p>Very good</p>
            <h2>Keep going!</h2>
          </div>
        </div>

        <div className="ft-details-bottom">
          <div>
            <p>km</p>
            <h2>4.2</h2>
          </div>
          <div>
            <p>cal</p>
            <h2>315</h2>
          </div>
          <div>
            <p>hours</p>
            <h2>4</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
