import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addSteps, addSelectedDay } from "../actions";
import RunnerIcon from "../svg/run.svg";
import TimerIcon from "../svg/timer.svg";
import CaloriesIcon from "../svg/whatshot.svg";

import Container from "../components/Container";

const icons = [TimerIcon, RunnerIcon, CaloriesIcon, RunnerIcon];

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
            value: ((totalSteps * 0.762) / 1000).toFixed(2)
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
        <Container background="solid" size="large">
          <div className="ft-header">
            <p className="bold-40-solid-green title">Welcome!</p>
            <p className="medium-16-solid-grey">Overview of your activity</p>
          </div>
        </Container>
        {!this.props.sample.steps ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <div className="ft-days">
              {this.state.days.map((day, index) => {
                return (
                  <Container
                    background="light"
                    size={"small"}
                    screen={"home"}
                    key={index + "_days"}
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
                        <p className="medium-16-tr-white">{day.day}</p>
                        <p className="medium-16-tr-white">
                          {day.dayName.toUpperCase()}
                        </p>
                      </div>
                    </Link>
                  </Container>
                );
              })}
            </div>
            {this.state.info.map((info, index) => {
              return (
                <div key={index + "_info"} className="mb anim-fade-in">
                  <Container background="light" size={"large"}>
                    <div className="ft-info">
                      <img className="ft-icon light" src={icons[index]} />
                      <div className="info-total">
                        <p className="medium-20-solid-white">{info.title}</p>
                        <p className="medium-16-tr-white">Total</p>
                      </div>
                      <div
                        className={`info-result ${
                          index === 0 ? "add-height" : ""
                        }`}
                      >
                        <p className="bold-38-solid-white ">{info.value}</p>
                      </div>
                    </div>
                  </Container>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ sample }) => {
  return { sample };
};

export default connect(mapStateToProps)(Home);