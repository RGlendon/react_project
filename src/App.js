import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './blocks/Header/Header';
import NavBaar from './blocks/Nav/NavBaar';
import Profile from './blocks/Profile/Profile';
import Dialogs from "./blocks/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";


function App(props) {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <NavBaar state={props.state.navbaar}/>
                <div className='wrapper__main'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>} />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>} />

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
