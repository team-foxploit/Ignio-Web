import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: {}
}

export default function(state=initialState, action){
    switch (action.type) {
        case actionTypes.SHOW_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case actionTypes.CLEAR_MESSAGE:
            return {
                ...state,
                message: {}
            }
        default:
            return state;
    }
}