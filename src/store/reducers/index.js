import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import message from "./message";

export default combineReducers({
  auth,
  error,
  message
});
