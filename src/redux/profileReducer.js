const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
};

function profileReducer(profilePage = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: profilePage.newTextPost,
                likesCount: 0
            };
            profilePage.posts.push(newPost);
            profilePage.newTextPost = '';
            return profilePage;
        case UPDATE_NEW_POST_TEXT:
            profilePage.newTextPost = action.newText;
            return profilePage;
        default:
            return profilePage;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});