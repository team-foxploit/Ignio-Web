import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ignioToken: localStorage.getItem('ignioToken'),
    user: {},
    isAuthenticated: false,
    isRegisterSuccess: false,
    isLoading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.USER_LOADING:
            const ignioToken = localStorage.getItem('ignioToken');
            return {
                ...state,
                isLoading: true,
                ignioToken: ignioToken
            };
        case actionTypes.USER_LOADED:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isAuthenticated: true
            };
        case actionTypes.AUTH_SUCCESS:
            if(action.payload.id_token){
                localStorage.setItem('ignioToken', action.payload.id_token);
                return {
                    ...state,
                    ignioToken: action.payload.id_token,
                    isLoading: false
                };
            }else{
                return {
                    ...state,
                    isRegisterSuccess: true,
                    isLoading: false
                };
            }
        case actionTypes.USER_LOGOUT:
        case actionTypes.AUTH_FAIL:
            localStorage.removeItem('ignioToken');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: {},
                ignioToken: null
            };
        default:
            return state;
    }
}
