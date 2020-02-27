const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Petya', src: 'https://profmed.1prof.by/kcfinder/upload/images/Dialog.jpg'},
        {id: 2, name: 'Oleg', src: 'https://autogear.ru/misc/i/gallery/39549/2484297.jpg'},
        {id: 3, name: 'Petya, Oleg', src: 'https://sakhapress.ru/wp-content/uploads/2016/02/GEMoAv13.jpg'},
        {id: 4, name: 'Alina', src: 'https://profmed.1prof.by/kcfinder/upload/images/Dialog.jpg'}
    ],
    messages: [
        {id: 1, message: 'How are you man?'},
        {id: 2, message: 'Holla'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'I think your react practice is really good'},
        {id: 6, message: 'Hi'},
        {id: 7, message: "What's up man?"}
    ],
    newMessageText: 'протестим'
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 8,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [ ...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});