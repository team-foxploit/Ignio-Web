import axios from "axios";

import * as actionTypes from "./actionTypes";
import { resolveDataUpdate } from "./helpers";
import { headerConfig } from "./config";

// GET Device Data By Id
export const fetchDataById = (deviceId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DEVICE_DATA_FETCH_START
  });
  axios
    .get("http://localhost:8080/services/devicedataservice/api/sensor-data/all/" + deviceId, headerConfig(getState))
    .then(res => {
      dispatch({
        type: actionTypes.DEVICE_DATA_FETCH_SUCCESS,
        payload: resolveDataUpdate(getState, res.data)
      });
    })
    .catch(error => {
      console.log(error);
      var errors;
      if(error.response){
        errors = {
          msg: error.response.data,
          status: error.response.status
        }
      }else{
        errors = {
          msg: "Network Error",
          status: 503
        }
      }
      dispatch({
        type: actionTypes.DEVICE_DATA_FETCH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};

// SET Active Device
export const setActiveDevice = deviceId => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_DEVICE,
    payload: deviceId
  });
};

// SET Active Device Data
export const setActiveDeviceData = data => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_DEVICE_DATA,
    payload: data
  });
};


// GET Device Details By DeviceId
export const fetchDeviceDetailById = (deviceId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DEVICE_DETAIL_FETCH_START
  });
  axios
    .get("http://localhost:8080/services/devicedataservice/api/device/" + deviceId, headerConfig(getState))
    .then(res => {
      dispatch({
        type: actionTypes.DEVICE_DETAIL_FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
      var errors;
      if(error.response){
        if(error.response.data){
          errors = {
            msg: error.response.data,
            status: error.response.status
          }
        }else{
          errors = {
            msg: "No device",
            status: error.response.status
          }
        }
      }else{
        errors = {
          msg: "Network Error",
          status: 503
        }
      }
      dispatch({
        type: actionTypes.DEVICE_DETAIL_FETCH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};