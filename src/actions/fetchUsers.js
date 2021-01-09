export const FETCH_USERS = "FETCH_USERS";
const fetchUsers = (dispatch) => {
  fetch("https://api.covidtracking.com/v1/states/current.json")
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_USERS, payload: res }));
};
export default fetchUsers;
