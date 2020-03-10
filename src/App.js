import React, {Component, Suspense} from 'react';
import './App.css';
import NavBaar from './blocks/Nav/NavBaar';
import {Route, withRouter} from "react-router-dom";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import UsersContainer from "./blocks/Users/UsersContainer";
import ProfileContainer from "./blocks/Profile/ProfileContainer";
import HeaderContainer from "./blocks/Header/HeaderContainer";
import LoginContainer from "./blocks/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./blocks/common/Preloader/Preloader";

// import DialogsContainer from "./blocks/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./blocks/Dialogs/DialogsContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <NavBaar state={this.props.store.getState().navbaar}/>
                <div className='wrapper__main'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => (
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer/>
                        </Suspense>)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/login' render={() => <LoginContainer/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

const mapDispatchToProps = {
    initializeApp,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
