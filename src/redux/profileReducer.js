import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {id: 1, message: "Peace", likesCount: 12},
        {id: 2, message: "That's great", likesCount: 3},
        {id: 3, message: "I'm realy good", likesCount: 7},
        // {id: 4, message: "What's up?", likesCount: 1},
        // {id: 5, message: "You are so cool", likesCount: 0},
        // {id: 6, message: "Hello", likesCount: 3},
        // {id: 7, message: "Hi everyone", likesCount: 14},
    ],
    newTextPost: 'тестовая информация',
    userProfile: null,
    status: 'initial status',
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: state.newTextPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextPost: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newTextPost: action.newText};
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export default profileReducer;

//ActionCreators
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export  const setStatus = (status) => ({type: SET_STATUS, status});

//ThunkCreators
export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(resp => {
            dispatch(setUserProfile(resp.data));
        })
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(resp => {
            dispatch(setStatus(resp.data));
        })
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
};