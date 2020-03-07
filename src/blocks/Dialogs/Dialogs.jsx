import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";



function Dialogs(props) {
    let dialogs = props.dialogsPage.dialogs.map(({id, name, src}) => <Dialog id={id} name={name} src={src} key={id}/>);
    let messages = props.dialogsPage.messages.map(({message, id}) => <Message message={message} key={id}/>);

    function addMessage(formData) {
        console.log(formData);
        props.addMessage(formData.messageText);
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
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

let AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name="messageText" placeholder='enter message'></Field>
            <button>add message</button>
        </form>
    );
};

AddMessageForm = reduxForm({form: 'addMessage'})(AddMessageForm);

export default Dialogs;