import React from 'react';
import s from "./Friend.module.css";



function Friend(props) {

  return (
        <div className={s.friend}>
          <img src={props.src} alt=""/>
          <p>{props.name}</p>
        </div>

  );
}

export default Friend;