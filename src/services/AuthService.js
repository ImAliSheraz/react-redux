import HttpService from './HttpService';
import {
    signUp,
    login,
    logout,
    forgotPassword,
    resetPassword,
    fetchUserProfile,
    updateUserProfile,
    getReportCreditPoint,
    resendVerifyLink
} from "../constant";

export const RegisterUserService = (credentials) => {
    const http = new HttpService();
    return http.postData(credentials, signUp).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const LoginUserService = (credentials) => {
    const http = new HttpService();
    return http.postData(credentials, login).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const LogOutUserService = () => {
    const http = new HttpService();
    const tokenId = "user-token";
    return http.getData(logout, tokenId).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const ForgotPasswordUserService = (credentials) => {
    const http = new HttpService();
    return http.postData(credentials, forgotPassword).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const ResentLinkUserService = (credentials) => {
    const http = new HttpService();
    return http.postData(credentials, resendVerifyLink).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const ResetPasswordUserService = (credentials) => {
    const http = new HttpService();
    return http.postData(credentials, resetPassword).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const FetchProfileDataService = async () => {
    const http = new HttpService();
    const tokenId = "user-token";
    return await http.getData(fetchUserProfile, tokenId).then((data) => {
        return data;
    }).catch((error) => {
        console.log(error);
        return error;
    })
}

export const UpdateProfileDataService = (credentials) => {
    const http = new HttpService();
    const tokenId = "user-token";
    return http.postData(credentials, updateUserProfile, tokenId).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    })
}

export const FetchSearchCountService = async () => {
    const http = new HttpService();
    const tokenId = "user-token";
    return await http.getData(getReportCreditPoint, tokenId).then((data) => {
        return data;
    }).catch((error) => {
        console.log(error);
        return error;
    })
}