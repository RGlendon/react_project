import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {renderTextarea} from "../common/ValidatorForms/ValidatorForms";
import {maxLength} from "../../utils/validators";



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

const maxLength300 = maxLength(10);

let AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={renderTextarea} validate={[maxLength300]} name="messageText" placeholder='enter message'/>
            <button>add message</button>
        </form>
    );
};

AddMessageForm = reduxForm({form: 'addMessage'})(AddMessageForm);

export default Dialogs;