import * as actionTypes from '../actions/actionTypes';

const initialState = {
    deviceIds: [
    ],
    deviceData: [],
    activeDevice: "",
    activeDeviceDetails: null,
    activeDeviceData: {},
    showChart: false,
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
                deviceData: [],
            };
        case actionTypes.DEVICE_DETAIL_FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.DEVICE_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                activeDeviceDetails: action.payload,
                isLoading: false
            };
        case actionTypes.DEVICE_DETAIL_FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                activeDeviceDetails: null,
            };
        case actionTypes.SET_ACTIVE_DEVICE:
                return {
                    ...state,
                    activeDevice: action.payload,
                    showChart: false,
                };
        case actionTypes.SET_ACTIVE_DEVICE_DATA:
            console.log(action.payload);
            return {
                ...state,
                activeDeviceData: action.payload,
                showChart: true,
            };
        default:
            return state;
    }
}
