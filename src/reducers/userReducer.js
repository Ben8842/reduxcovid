import { FETCH_USERS } from "../actions/fetchUsers";
const userReducer = (state = {}, { type, payload }) => {
  if (payload === undefined) {
    return null;
  } else {
    switch (type) {
      case FETCH_USERS:
        return payload;
      default:
        return state;
    }
  }
};
export default userReducer;
