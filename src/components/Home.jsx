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
const ftInfo = [
  { title: "Activity", value: "6h 40min" },
  { title: "Steps", value: "7,540" },
  { title: "Calories", value: "340" }
];

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
      <Container backgroundColor={"#fff"}>
        <div className="ft-header">
          <h1>Welcome!</h1>
          <p>Overview of your activity</p>
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
      {ftInfo.map(info => {
        return (
          <div className="mb">
            <Container backgroundColor={"rgba(255, 255, 255, 0.2)"}>
              <div className="ft-info">
                <div>
                  <h2>{info.title}</h2>
                  <p>Total</p>
                </div>
                <h1>{info.value}</h1>
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
}
