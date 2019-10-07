import axios from "axios";

import * as actionTypes from "./actionTypes";
import { headerConfig } from "./config";
import { fetchDataById } from "./dataActions";

export const uxProcedure = () => (dispatch, getState) => {
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
        dispatch({
            type: actionTypes.SHOW_MESSAGE,
            payload: {
                message: "Welcome to Ignio"
            }
        });
        console.log(getState().auth.user);
        if(getState().data.activeDevice === "" && getState().auth.user.billingInfo){
            console.log(getState().data);
            console.log("fetch device data!!!");
            getState().auth.user.billingInfo.ignios.map((deviceId) => 
                dispatch(fetchDataById(deviceId))
            );
        }
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
}