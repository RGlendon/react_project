import {usersAPI} from "../api/api";

const FOLLOWED_TOGGLE = 'FOLLOWED_TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PRELOADER = 'SET_PRELOADER';
const MAKE_DISABLE = 'MAKE_DISABLE';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Petr Olegovich',
        //     status: 'I am good',
        //     location: {country: 'Russia', city: 'Moscow'},
        //     photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
        //     followed: false,
        // },
        // {
        //     id: 2,
        //     fullName: 'Rita',
        //     status: 'I am good too',
        //     location: {country: 'Russia', city: 'Belev'},
        //     photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
        //     followed: true,
        // },
        // {
        //     id: 3,
        //     fullName: 'Dmitry',
        //     status: 'norm',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
        //     followed: true,
        // },
    ],
    currentPage: 1,
    pageSize: 15,
    totalCount: 30,
    isLoading: false,
    disabled: []
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOWED_TOGGLE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_PRELOADER:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case MAKE_DISABLE:
            return {
                ...state,
                disabled: action.disabled ? [...state.disabled, action.userId] : state.disabled.filter( id => id !== action.userId)
            };
        default:
            return state;
    }
}


export default usersReducer;

export const followToggle = (userID) => ({type: FOLLOWED_TOGGLE, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount  = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setPreloader = (isLoading) => ({type: SET_PRELOADER, isLoading});
export const makeDisable = (disabled, userId) => ({type: MAKE_DISABLE, disabled, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(resp => {
                dispatch(setPreloader(false));
                dispatch(setUsers(resp.data.items));
                dispatch(setTotalCount(resp.data.totalCount));
            })
    }
};
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(makeDisable(true, userId));
        usersAPI.unfollow(userId)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(followToggle(userId));
                }
                dispatch(makeDisable(false, userId));
            });
    }
};
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(makeDisable(true, userId));
        usersAPI.follow(userId)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(followToggle(userId));
                }
                dispatch(makeDisable(false, userId));
            });
    }
};
