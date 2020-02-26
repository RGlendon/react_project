import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profileReducer";



function Posts(props) {
    let posts = props.posts.map(({id, message, likesCount}) => <Post message={message} likesCountss={likesCount}/>);

    let newPost = React.createRef();

    function addPost() {
        props.dispatch(addPostActionCreator());
    }

    function updateNewTextPost() {
        let text = newPost.current.value;
        props.dispatch(updateNewTextPostActionCreator(text));
    }

    return (
        <div>
            <h2>My posts</h2>
            <textarea ref={newPost} onChange={updateNewTextPost} value={props.newText}/>
            <button onClick={addPost}>add</button>
            <div className={s.posts}>
                {posts}
                {/*<Post message="I'm glad to meet you, guy" likesCount='12'/>*/}
            </div>
        </div>

    );
}

export default Posts;