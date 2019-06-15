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
            <p className="bold-34-solid-white title">{currDay + "!"}</p>
            <p className="medium-16-tr-white">{fullDate}</p>
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
                <p className="medium-16-tr-white">{day.day}</p>
                <p className="medium-16-tr-white">
                  {day.dayName.toUpperCase()}
                </p>
              </div>
            </Container>
          );
        })}
      </div>
      <Container background="solid" size="large" screen="details">
        <div className="ft-details-main">
          <div className="ft-circle">
            <img className="ft-icon dark details-icon" src={RunnerIcon} />
            <p className="regular-20-solid-black">Steps</p>
            <p className="bold-48-solid-black">{allSteps}</p>
          </div>
          <div>
            <p className="regular-20-solid-black">Very good</p>
            <p className="bold-40-solid-black">Keep going!</p>
          </div>
        </div>

        <div className="ft-details-bottom">
          <div>
            <p className="regular-18-solid-grey">km</p>
            <p className="bold-40-solid-green">{distance}</p>
          </div>
          <div>
            <p className="regular-18-solid-grey">cal</p>
            <p className="bold-40-solid-green">{calories}</p>
          </div>
          <div>
            <p className="regular-18-solid-grey">hours</p>
            <p className="bold-40-solid-green">{timeSpent}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
