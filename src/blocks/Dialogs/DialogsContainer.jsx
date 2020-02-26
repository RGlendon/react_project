import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {
    let dialogsPage = props.store.getState().dialogsPage;

    function addMessage() {
        props.store.dispatch(addMessageActionCreator());
    }

    function  updateMessageText(text) {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialogs updateMessageText={updateMessageText}
                 addMessage={addMessage}
                 dialogsPage={dialogsPage} />
    );
}

export default DialogsContainer;