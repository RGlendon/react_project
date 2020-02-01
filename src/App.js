import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './blocks/Header/Header';
import Nav from './blocks/Nav/Nav';
import Profile from './blocks/Profile/Profile';
import Dialogs from "./blocks/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <div className='wrapper__main'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
