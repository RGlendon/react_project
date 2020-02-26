const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        navbaar: {
            friends: [
                {
                    name: 'Sveta',
                    src: 'https://avatars.mds.yandex.net/get-pdb/1365420/2a6155fa-b07a-4eb8-aa3c-f603106f03db/s1200'
                },
                {name: 'Petr', src: 'https://ru.fishki.net/picsw/032011/02/post/portret/portret-027.jpg'},
                {
                    name: 'Vlasa',
                    src: 'https://avatars.mds.yandex.net/get-pdb/916253/397597be-eb81-45a1-a4bb-1538a74253b0/s1200'
                }
            ]
        },

        profilePage: {
            posts: [
                {id: 1, message: "Peace", likesCount: 12},
                {id: 2, message: "That's great", likesCount: 3},
                {id: 3, message: "I'm realy good", likesCount: 7},
                // {id: 4, message: "What's up?", likesCount: 1},
                // {id: 5, message: "You are so cool", likesCount: 0},
                // {id: 6, message: "Hello", likesCount: 3},
                // {id: 7, message: "Hi everyone", likesCount: 14},
            ],
            newTextPost: 'тестовая информация'
        },

        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },


    _rerenderAllTree() {
        console.log('заглушка. эту функцию переопределим в App через другую функцию');
    },
    subscribe(observer) {
        this._rerenderAllTree = observer;  //это паттерн (observer). Переносим функцию через присваивание, для избежания циклического импорта
    },

    // addPost() {
    //     let newPost = {
    //         id: 8,
    //         message: this._state.profilePage.newTextPost,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newTextPost = '';
    //     this._rerenderAllTree();
    // },
    // updateNewTextPost(newText) {
    //     this._state.profilePage.newTextPost = newText;
    //     this._rerenderAllTree();
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 8,
                message: this._state.profilePage.newTextPost,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = '';
            this._rerenderAllTree();
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newTextPost = action.newText;
            this._rerenderAllTree();
        }

        else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 8,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderAllTree();
        }

        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._rerenderAllTree();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

window.store = store;
export default store;