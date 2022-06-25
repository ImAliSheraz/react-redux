import * as ActionTypes from '../ActionTypes';
const initState = {
    authResponse: "",
    signUpResponse: "",
    loginResponse: "",
    SearchCount: "",
    ResetLinkResponse: "",
    UserProfile: "",
};
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.RESTART_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: "",
            };
        case ActionTypes.LOADING:
            return {
                ...state,
                authResponse: "loading...",
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                signUpResponse: action.res,
            };
        case ActionTypes.SIGNUP_ERROR:
            return {
                ...state,
                signUpResponse: action.res,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loginResponse: "Redirecting to Dashboard...",
            };
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                loginResponse: action.res,
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.LOGOUT_ERROR:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.FORGOT_PASSWORD_LINK_ERROR:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.FORGOT_PASSWORD_LINK_SUCCESS:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.USER_VERIFICATION_LINK_ERROR:
            return {
                ...state,
                ResetLinkResponse: action.res,
            };
        case ActionTypes.USER_VERIFICATION_LINK_SUCCESS:
            return {
                ...state,
                ResetLinkResponse: action.res,
            };
        case ActionTypes.PASSWORD_RESET_ERROR:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                authResponse: action.res,
            };
        case ActionTypes.PROFILE_FETCH_ERROR:
            return {
                ...state,
                UserProfile: action.res,
            };
        case ActionTypes.PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                UserProfile: action.res,
            };
        case ActionTypes.PROFILE_UPDATE_ERROR:
            return {
                ...state,
                UserProfile: action.res,
            };
        case ActionTypes.PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                UserProfile: action.res,
            };
        case ActionTypes.FETCH_SEARCH_COUNT_SUCCESS:
            return {
                ...state,
                SearchCount: action.res,
            };
        case ActionTypes.FETCH_SEARCH_COUNT_ERROR:
            return {
                ...state,
                SearchCount: action.res,
            };
        case ActionTypes.CODE_ERROR:
            return {
                ...state,
                authResponse:
                    "There seems to be a problem, please refresh your browser",
            };
        default:
            return state;
    }
};
export default AuthReducer;