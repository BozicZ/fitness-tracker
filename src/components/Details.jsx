import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "../styles/home.css";

// TODO: Move to helpers all repeating functions
const calcTime = (currDay, allDays) => {
  const totalSteps = allDays.find(day => day.dayName === currDay).steps;
  let totalTime = new Date(null);
  totalTime.setSeconds(totalSteps * 0.5);
  totalTime = totalTime
    .toISOString()
    .substr(11, 5)
    .replace(":", " ");
  return totalTime;
};

export default function Details(props) {
  const { currDay, allDays } = props.location.state;
  const selectedDay = allDays.find(day => day.dayName === currDay);
  const fullDate = `${selectedDay.month} ${selectedDay.dayName}, ${
    selectedDay.year
  }.`;
  const allSteps = selectedDay.steps;
  const calories = selectedDay.steps / 20;
  const timeSpent = calcTime(currDay, allDays);
  const distance = ((selectedDay.steps * 0.762) / 1000).toFixed(2);
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
            <h1>{currDay + "!"}</h1>
            <p>{fullDate}</p>
          </div>
        </div>
      </Container>
      <div className="ft-days">
        {allDays.map((day, index) => {
          return (
            <Container
              key={index + "_details"}
              backgroundColor={"rgba(255, 255, 255, 0.2)"}
            >
              <div className="ft-day">
                <p>{day.day}</p>
                <p>{day.dayName}</p>
              </div>
            </Container>
          );
        })}
      </div>
      <Container backgroundColor={"#fff"}>
        <div className="ft-details-main">
          <div className="ft-circle">
            <p>Steps</p>
            <h1>{allSteps}</h1>
          </div>
          <div>
            <p>Very good</p>
            <h2>Keep going!</h2>
          </div>
        </div>

        <div className="ft-details-bottom">
          <div>
            <p>km</p>
            <h2>{distance}</h2>
          </div>
          <div>
            <p>cal</p>
            <h2>{calories}</h2>
          </div>
          <div>
            <p>hours</p>
            <h2>{timeSpent}</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
