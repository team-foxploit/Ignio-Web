import axios from "axios";

import * as actionTypes from "./actionTypes";
import { headerConfig } from "./config";

// LOGIN USER
export const login = user => dispatch => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post("http://localhost:8080/api/authenticate", user)
    .then(res => {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data
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

// LOGOUT USER
export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  dispatch({
    type: actionTypes.USER_LOGOUT
  });
};

// REGISTER USER
export const register = user => dispatch => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post("http://localhost:8080/api/register", user)
    .then(res => {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
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

// GET USER
export const getUser = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.USER_LOADING
  });
  axios
    .get("http://localhost:8080/api/account", headerConfig(getState))
    .then(res => {
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data
      });
    })
    .catch(error => {
      let errors = null;
      if(error.response){
          errors = {
              msg: error.response.data,
              status: error.response.status
          };
      }
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};
