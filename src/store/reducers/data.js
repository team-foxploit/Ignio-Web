import * as actionTypes from '../actions/actionTypes';

const initialState = {
    deviceIds: [
    ],
    deviceData: [],
    isLoading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case actionTypes.DEVICE_DATA_FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.DEVICE_DATA_FETCH_SUCCESS:
            return {
                ...state,
                deviceIds: action.payload.deviceIds,
                deviceData: action.payload.deviceData,
                isLoading: false
            };
        case actionTypes.DEVICE_DATA_FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                deviceData: {},
            };
        default:
            return state;
    }
}
