import * as actionTypes from './actionTypes';

// Create message
export const displayMessage = (msg) => {
    return {
        type: actionTypes.SHOW_MESSAGE,
        payload: {
            message: msg
        }
    }
}
