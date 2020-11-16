import React, { Component } from "react";
import USAMap from "react-usa-map";

class Map extends Component {
  render() {
    return (
      <div className="App">
        <h1>Covid Cases by State</h1>
        <h4>
          Click on a state to see how many positive Corona cases it currently
          has
        </h4>
        <USAMap />
      </div>
    );
  }
}

export default Map;
