import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_INFO = 'SET_AUT_INFO';

const initialState = {
    id: null,
    login: null,
    email: null,
    isLogin: false
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                ...action.data,
                isLogin: action.isLogin,
            };
        default:
            return state;
    }
}

export default authReducer;


export const setAuthInfo = (data, isLogin) => ({type: SET_AUTH_INFO, data, isLogin});

//thunkCreators
export const getAuthData = () => (dispatch) => {
   return authAPI.me()
        .then(resp => {
            // debugger
            if (resp.data.resultCode === 0) {
                dispatch(setAuthInfo(resp.data.data, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(getAuthData());
            } else {
                let message = resp.data.messages[0];
                dispatch(stopSubmit('loginForm', {_error: message}));
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setAuthInfo({id: null, login: null, email: null,}, false));
            }
        })
}