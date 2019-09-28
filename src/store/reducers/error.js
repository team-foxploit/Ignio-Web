import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: {},
    status: null
}

export default function (state=initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_ERROR:
            if(action.payload){
                return {
                    error: action.payload.msg,
                    status: action.payload.status
                }
            }else{
                return {
                    error: {
                        error: "API not available"
                    },
                    status: 404
                }
            }
        case actionTypes.CLEAR_ERROR:
            return {
                error: {},
                status: null
            }
        default:
            return state;
    }
}