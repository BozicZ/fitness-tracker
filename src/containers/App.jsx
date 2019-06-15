import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/app.css";
import "../styles/home.css";
import "../styles/details.css";
import "../styles/fonts.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <div className="app-content">{children}</div>;
  }
}

export default connect()(App);
