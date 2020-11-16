import React from "react";
import "./App.css";
import { connect } from "react-redux";
import updateMovies from "./actions/updateMovies";
import fetchUsers from "./actions/fetchUsers";
import USAMap from "react-usa-map";
import Map from "./Map.js";

function App(props) {
  return (
    <div className="App">
      <Map />
      <h3>Corona Data</h3>

      <br />

      {props.users.length === 0 ? (
        <p>no Data</p>
      ) : (
        props.users.map((user) => (
          <p key={user.state}>
            {user.negative} - {user.positive}
          </p>
        ))
      )}
      <br />
      <button onClick={props.fetchUsers}>Find Corona Data</button>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
