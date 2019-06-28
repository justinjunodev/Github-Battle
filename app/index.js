import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./style.css";
import Popular from "./components/Popular";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
