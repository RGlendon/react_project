import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



function Dialogs(props) {
    let dialogs = props.dialogsPage.dialogs.map(({id, name, src}) => <Dialog id={id} name={name} src={src} key={id}/>);
    let messages = props.dialogsPage.messages.map(({message, id}) => <Message message={message} key={id}/>);

    function addMessage() {
        props.addMessage();
    }

    function  updateMessageText(event) {
        let text = event.target.value;
        props.updateMessageText(text);
    }

    // if (!props.isLogin) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.message_wrapper}>
                <div className={s.messages}>
                    {messages}
                </div>
                <div>
                    <textarea onChange={updateMessageText} value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;