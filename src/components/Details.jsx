import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import RunnerIcon from "../svg/run.svg";
import ArrowLeft from "../svg/left.svg";
import {
  formatTimeString,
  calcCalories,
  calcDistance,
  roundToHour
} from "../utils/tools";

const calcTime = (currDay, allDays) => {
  const totalSteps = allDays.find(day => day.dayName === currDay).steps;
  let totalTime = new Date(null);
  totalTime.setSeconds(totalSteps * 0.5);
  totalTime = formatTimeString(totalTime).replace(":", " ");
  return totalTime;
};

export default function Details(props) {
  const { currDay, allDays } = props.location.state;
  const selectedDay = allDays.find(day => day.dayName === currDay);
  const fullDate = `${selectedDay.month} ${selectedDay.dayName}, ${
    selectedDay.year
  }.`;
  const allSteps = selectedDay.steps;
  const calories = calcCalories(selectedDay.steps).toFixed(1);
  const timeSpent = calcTime(currDay, allDays);
  const distance = calcDistance(selectedDay.steps).toFixed(1);

  return (
    <div>
      <Container background="light" size="large" screen="details">
        <div className="details-header">
          <Link to="/home">
            <img src={ArrowLeft} alt="Arrow icon" />
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
                  {day.dayName.slice(0, 3).toUpperCase()}
                </p>
              </div>
            </Container>
          );
        })}
      </div>
      <Container background="solid" size="large" screen="details">
        <div className="ft-details-main">
          <div className="ft-circle">
            <img
              className="ft-icon dark details-icon"
              src={RunnerIcon}
              alt="Runner icon"
            />
            <p className="regular-20-solid-black">Steps</p>
            <p className="bold-48-solid-black">{allSteps}</p>
          </div>
          <div className="anim-fade-in">
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
            <p className="bold-40-solid-green">{roundToHour(timeSpent)}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
