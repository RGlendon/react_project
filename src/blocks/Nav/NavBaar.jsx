import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

function NavBaar(props) {

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li><NavLink to="/profile" className={s.link} activeClassName={s.link_active}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={s.link} activeClassName={s.link_active}>Message</NavLink></li>
        <li><NavLink to="/news" className={s.link} activeClassName={s.link_active}>News</NavLink></li>
        <li><NavLink to="/music" className={s.link} activeClassName={s.link_active}>Music</NavLink></li>
        <li><NavLink to="settings" className={s.link} activeClassName={s.link_active}>Settings</NavLink></li>
      </ul>
      <Friends friends={props.state.friends}/>
    </nav>
  );
}

export default NavBaar;