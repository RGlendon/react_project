import {combineReducers, createStore} from "redux";
import navbaarReducer from "./navbaarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    navbaar: navbaarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);


window.store = store;
export default store;