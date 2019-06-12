import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Fitness Tracker Home</h2>;
}

function Details() {
  return <h2>Fitness Tracker Details</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details/">Details</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/details/" component={Details} />
      </div>
    </Router>
  );
}

export default App;
