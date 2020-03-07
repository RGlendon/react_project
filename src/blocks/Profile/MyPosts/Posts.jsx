import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import {Field, reduxForm} from "redux-form";



function Posts(props) {
    let posts = props.posts.map(({id, message, likesCount}) => <Post message={message} likesCountss={likesCount} key={id}/>);

    function addPost(formData) {
        props.addPost(formData.postText);
    }

    return (
        <div>
            <h2>My posts</h2>
            <AddPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {posts}
                {/*<Post message="I'm glad to meet you, guy" likesCount='12'/>*/}
            </div>
        </div>

    );
}

let AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='postText' placeholder='enter post'/>
            <button>add</button>
        </form>
    );
}

AddPostForm = reduxForm({form: 'addPostForm'})(AddPostForm);

export default Posts;