import { combineReducers } from "redux";
import auth from "./auth";
import data from "./data";
import error from "./error";
import message from "./message";

export default combineReducers({
  auth,
  data,
  error,
  message
});
