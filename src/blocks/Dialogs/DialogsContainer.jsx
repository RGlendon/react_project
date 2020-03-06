// import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// function DialogsContainer(props) {
//     let dialogsPage = props.store.getState().dialogsPage;
//
//     function addMessage() {
//         props.store.dispatch(addMessageActionCreator());
//     }
//
//     function  updateMessageText(text) {
//         props.store.dispatch(updateMessageTextActionCreator(text));
//     }
//
//     return (
//         <Dialogs updateMessageText={updateMessageText}
//                  addMessage={addMessage}
//                  dialogsPage={dialogsPage} />
//     );
// }

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch) {
   return {
       addMessage: () => {
           dispatch(addMessageActionCreator());
       },
       updateMessageText: (text) => {
           dispatch(updateMessageTextActionCreator(text));
       }
   }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);