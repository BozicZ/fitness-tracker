import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addSteps, addSelectedDay } from "../actions";

import Container from "./Container";
import "../styles/home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: [],
      info: []
    };

    this.selectDay = this.selectDay.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addSteps());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.sample.steps !== this.props.sample.steps) {
      const totalSteps = this.props.sample.steps.reduce((acc, curr) => {
        return acc + curr.steps;
      }, 0);
      let totalTime = new Date(null);
      totalTime.setSeconds(totalSteps * 0.5);
      totalTime =
        totalTime
          .toISOString()
          .substr(11, 5)
          .replace(":", "h ") + "min";
      this.setState({
        days: this.props.sample.steps,
        info: [
          { title: "Activity", value: totalTime },
          { title: "Steps", value: totalSteps },
          { title: "Calories", value: totalSteps / 20 },
          {
            title: "Distance",
            value: ((totalSteps * 0.762) / 1000).toFixed(2) + " km"
          }
        ]
      });
    }
  }

  selectDay(dayName) {
    const { dispatch } = this.props;
    dispatch(addSelectedDay(dayName));
  }

  render() {
    return (
      <div>
        <Container backgroundColor={"#fff"}>
          <div className="ft-header">
            <h1>Welcome!</h1>
            <p>Overview of your activity</p>
          </div>
        </Container>
        <div className="ft-days">
          {this.state.days.map((day, index) => {
            return (
              <Container
                key={index + "_days"}
                backgroundColor={"rgba(255, 255, 255, 0.2)"}
              >
                <Link
                  to={{
                    pathname: "/details",
                    state: {
                      currDay: day.dayName,
                      allDays: this.props.sample.steps
                    }
                  }}
                  onClick={() => this.selectDay(day.dayName)}
                >
                  <div className="ft-day">
                    <p>{day.day}</p>
                    <p>{day.dayName.toUpperCase()}</p>
                  </div>
                </Link>
              </Container>
            );
          })}
        </div>
        {this.state.info.map((info, index) => {
          return (
            <div key={index + "_info"} className="mb">
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
}
const mapStateToProps = ({ sample }) => {
  return { sample };
};

export default connect(mapStateToProps)(Home);
