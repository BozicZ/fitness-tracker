import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import RunnerIcon from "../svg/run.svg";
import ArrowLeft from "../svg/left.svg";

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
  const calories = (selectedDay.steps / 20).toFixed(1);
  const timeSpent = calcTime(currDay, allDays);
  const distance = ((selectedDay.steps * 0.762) / 1000).toFixed(1);
  return (
    <div>
      <Container background="light" size="large" screen="details">
        <div className="details-header">
          <Link to="/home">
            <img src={ArrowLeft} />
          </Link>
          <div className="ft-details-header">
            <p className="title">{currDay + "!"}</p>
            <p className="subtitle">{fullDate}</p>
          </div>
        </div>
      </Container>
      <div className="ft-days">
        {allDays.map((day, index) => {
          return (
            <Container
              background="light"
              size={"small"}
              screen={"details"}
              active={day.dayName === currDay ? "active" : ""}
              key={index + "_details"}
            >
              <div className="ft-day">
                <p className="subtitle">{day.day}</p>
                <p className="subtitle">{day.dayName.toUpperCase()}</p>
              </div>
            </Container>
          );
        })}
      </div>
      <Container background="solid" size="large" screen="details">
        <div className="ft-details-main">
          <div className="ft-circle">
            <img className="ft-icon dark details-icon" src={RunnerIcon} />
            <p className="details-info">Steps</p>
            <p className="details-result">{allSteps}</p>
          </div>
          <div>
            <p className="info">Very good</p>
            <p className="message">Keep going!</p>
          </div>
        </div>

        <div className="ft-details-bottom">
          <div>
            <p className="details-title">km</p>
            <p className="details-total">{distance}</p>
          </div>
          <div>
            <p className="details-title">cal</p>
            <p className="details-total">{calories}</p>
          </div>
          <div>
            <p className="details-title">hours</p>
            <p className="details-total">{timeSpent}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
