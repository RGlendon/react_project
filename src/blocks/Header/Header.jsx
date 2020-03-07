import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img className="logo" src="https://image.flaticon.com/icons/svg/908/908097.svg" alt="#"/>
            {props.isLogin
                ? <NavLink to={'/account'} className={s.auth}>{props.login} <button onClick={props.logout}>Log out</button></NavLink>
                : <NavLink to={'/login'} className={s.auth}>Login</NavLink>
            }
        </header>
    );
}

export default Header;