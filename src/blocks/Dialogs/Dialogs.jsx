import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";







function Dialogs(props) {

    // преобразуем внешние данные в массив компонентов
    let dialogs = props.state.dialogs.map(({id, name, src}) => <Dialog id={id} name={name} src={src}/>);
    let messages = props.state.messages.map(({message}) => <Message message={message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
                {/*<Dialog id={dialogData[3].id} name={dialogData[3].name}/>*/}
                {/*<Dialog id='4' name='Alina'/>*/}
            </div>
            <div className={s.messages}>
                {messages}
                {/*<Message message={messageData[6].message}/>*/}
                {/*<Message message='Hi'/>*/}
            </div>
        </div>
    );
}

export default Dialogs;