import {authAPI} from "../api/api";

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
                isLogin: true
            };
        default:
            return state;
    }
}

export default authReducer;


export const setAuthInfo = (data) => ({type: SET_AUTH_INFO, data});

//thunkCreators
export const getAuthData = () => (dispatch) => {
    authAPI.me()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setAuthInfo(resp.data.data));
            }
        })
}