import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


function Dialog(props) {


    return (
        <div className={s.dialog}>
            <img className={s.image} src={props.src} alt='img'/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}


export default Dialog;