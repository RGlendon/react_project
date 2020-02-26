import React from 'react';
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";


function PostsContainer(props) {
    let state = props.store.getState();

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function updateNewTextPost(text) {
        props.store.dispatch(updateNewTextPostActionCreator(text));
    }

    return (
        <Posts posts={state.profilePage.posts}
               newText={state.profilePage.newTextPost}
               updateNewTextPost={updateNewTextPost}
               addPost={addPost}/>
    );
}

export default PostsContainer;