import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './blocks/Header/Header';
import NavBaar from './blocks/Nav/NavBaar';
import Profile from './blocks/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import DialogsContainer from "./blocks/Dialogs/DialogsContainer";
import UsersContainer from "./blocks/Users/UsersContainer";


function App(props) {

    return (
        <div className="wrapper">
            <Header/>
            <NavBaar state={props.store.getState().navbaar}/>
            <div className='wrapper__main'>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
