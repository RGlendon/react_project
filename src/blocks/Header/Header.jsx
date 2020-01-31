import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img className="logo" src="https://image.flaticon.com/icons/svg/908/908097.svg" alt="#" />
    </header>
  );
}

export default Header;