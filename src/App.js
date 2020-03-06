import React from 'react';
import './App.css';
import Header from './blocks/Header/Header';
import NavBaar from './blocks/Nav/NavBaar';
import {Route} from "react-router-dom";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import DialogsContainer from "./blocks/Dialogs/DialogsContainer";
import UsersContainer from "./blocks/Users/UsersContainer";
import ProfileContainer from "./blocks/Profile/ProfileContainer";
import HeaderContainer from "./blocks/Header/HeaderContainer";
import Login from "./blocks/Login/Login";


function App(props) {

    return (
        <div className="wrapper">
            <HeaderContainer />
            <NavBaar state={props.store.getState().navbaar}/>
            <div className='wrapper__main'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>

                <Route path='/login' render={() => <Login />}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
