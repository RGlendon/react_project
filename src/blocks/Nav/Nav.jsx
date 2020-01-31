import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Message</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
}

export default Nav;