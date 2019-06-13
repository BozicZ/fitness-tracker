import React, { Component } from "react";
import { connect } from "react-redux";
import { addSampleAsync } from "../actions";
import "../styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addSampleAsync("Some sync data..."));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prev: ", prevProps.sample);
    console.log("new: ", this.props.sample);
  }

  render() {
    const { children } = this.props;
    return <div className="app-content">{children}</div>;
  }
}
const mapStateToProps = ({ sample }) => {
  return { sample };
};

export default connect(mapStateToProps)(App);
