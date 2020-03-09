import {createSelector} from "reselect";

export const getUserProfileSelector = (state) => {
    debugger
    return state.profilePage.userProfile;
}
export const getUserProfile = createSelector(getUserProfileSelector,
    (user) => {
    //какая-то сложная логика
        return user;
    });

export const getUserStatus = (state) => state.profilePage.status;
