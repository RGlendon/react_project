// import React from 'react';
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";



// function PostsContainer(props) {
//     let state = props.store.getState();
//
//     function addPost() {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     function updateNewTextPost(text) {
//         props.store.dispatch(updateNewTextPostActionCreator(text));
//     }
//
//     return (
//         <Posts posts={state.profilePage.posts}
//                newText={state.profilePage.newTextPost}
//                updateNewTextPost={updateNewTextPost}
//                addPost={addPost}/>
//     );
// }

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newText: state.profilePage.newTextPost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewTextPost: (text) => {
            dispatch(updateNewTextPostActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;