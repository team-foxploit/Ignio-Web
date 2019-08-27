import axios from "axios";

import * as actionTypes from "./actionTypes";
import { resolveDataUpdate } from "./helpers";

// LOAD Device Data By Id
export const fetchDataById = deviceId => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DEVICE_DATA_FETCH_START
  });
  axios
    .get("http://localhost:8082/api/device/data/all/" + deviceId)
    .then(res => {
      dispatch({
        type: actionTypes.DEVICE_DATA_FETCH_SUCCESS,
        payload: resolveDataUpdate(getState, res.data)
      });
    })
    .catch(error => {
      console.log(error);
      const errors = {
        msg: error.response.data,
        status: error.response.status
      };
      dispatch({
        type: actionTypes.DEVICE_DATA_FETCH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};

// TODO: LOGOUT USER
/*
export const logout = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post(
      "http://localhost:8000/api/auth/logout/",
      null,
      headerConfig(getState)
    )
    .then(res => {
      dispatch({
        type: actionTypes.USER_LOGOUT
      });
    })
    .catch(error => {
      console.log(error);
      const errors = {
        msg: error.response.data,
        status: error.response.status
      };
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};
*/