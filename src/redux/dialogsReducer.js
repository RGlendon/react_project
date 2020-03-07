const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 8,
                message: action.messageText
            };
            return {
                ...state,
                messages: [ ...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText});
