import * as actionTypes from './actionTypes';

// Create message
export const createMessage = (msg) => {
    return {
        type: actionTypes.SHOW_MESSAGE,
        payload: msg
    }
}
