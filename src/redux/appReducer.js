import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthData} from "./authReducer";

const TO_INITIALIZE = 'TO_INITIALAZE_';

const initialState = {
    initialized: false,
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case TO_INITIALIZE:
            return {
                ...state,
                initialized: action.initialized,
            };
        default:
            return state;
    }
}

export default appReducer;


export const initialize = (initialized) => ({type: TO_INITIALIZE, initialized});

//thunkCreators
export const initializeApp = () => (dispatch) => {
    let authDataPromise = dispatch(getAuthData());
    let promises = [authDataPromise];

    Promise.all(promises)
        .then(resp => {
            // debugger
            dispatch(initialize(true));
        })
};
