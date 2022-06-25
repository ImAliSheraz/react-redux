import * as ActionTypes from '../ActionTypes';
import {
    RegisterUserService,
    LoginUserService,
    LogOutUserService,
    ForgotPasswordUserService,
    ResetPasswordUserService,
    FetchProfileDataService,
    UpdateProfileDataService,
    FetchSearchCountService,
    ResentLinkUserService
} from '../../services/AuthService';

export const RegisterAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        RegisterUserService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
                history.push('/registered');
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const LoginAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        LoginUserService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                var userDetails = res.data.user_subscription_details;
                localStorage.setItem('user-subscription-details', JSON.stringify(userDetails));
                localStorage.setItem('user-token', res.data.token)
                dispatch({ type: ActionTypes.LOGIN_SUCCESS });
                if (!res.data.user_subscription_details.client_subscription || res.data.user_subscription_details.client_subscription === '' || res.data.user_subscription_details.client_subscription === null) {
                    history.push('/subscription-packages');
                } else {
                    history.push('/home');
                }

            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.LOGIN_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const ResentLinkAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        ResentLinkUserService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.USER_VERIFICATION_LINK_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.USER_VERIFICATION_LINK_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const LogoutAction = (history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        LogOutUserService().then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                localStorage.removeItem('user-subscription-details');
                localStorage.removeItem('user-token');
                history.push('/login');
                dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const ForgotPasswordAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        ForgotPasswordUserService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.FORGOT_PASSWORD_LINK_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.FORGOT_PASSWORD_LINK_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const ResetPasswordAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        ResetPasswordUserService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.PASSWORD_RESET_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.PASSWORD_RESET_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const FetchProfileDataAction = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        FetchProfileDataService().then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.PROFILE_FETCH_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.PROFILE_FETCH_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const UpdateProfileDataAction = (credentials) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        UpdateProfileDataService(credentials).then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.PROFILE_UPDATE_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.PROFILE_UPDATE_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const FetchSearchCountAction = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        FetchSearchCountService().then((res) => {
            if (res.hasOwnProperty('status') && res.status === true) {
                dispatch({ type: ActionTypes.FETCH_SEARCH_COUNT_SUCCESS, res });
            } else if (res.hasOwnProperty('status') && res.status === false) {
                dispatch({ type: ActionTypes.FETCH_SEARCH_COUNT_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}