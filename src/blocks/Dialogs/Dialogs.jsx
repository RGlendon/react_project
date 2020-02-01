import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function Dialog(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

function Dialogs(props) {
    let dialogData = [
        {id: 1, name: 'Petya'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Petya, Oleg'},
        {id: 4, name: 'Alina'}
    ];
    let messageData = [
        {id: 1, message: 'How are you man?'},
        {id: 2, message: 'Holla'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'I think your react practice is really good'},
        {id: 6, message: 'Hi'},
        {id: 7, message: "What's up man?"}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog id={dialogData[0].id} name={dialogData[0].name}/>
                <Dialog id={dialogData[1].id} name={dialogData[1].name}/>
                <Dialog id={dialogData[2].id} name={dialogData[2].name}/>
                <Dialog id={dialogData[3].id} name={dialogData[3].name}/>
                {/*<Dialog id='4' name='Alina'/>*/}
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
                <Message message={messageData[6].message}/>
                {/*<Message message='Hi'/>*/}
            </div>
        </div>
    );
}

export default Dialogs;