import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {renderTextarea} from "../../common/ValidatorForms/ValidatorForms";
import {maxLength} from "../../../utils/validators";



function Posts(props) {
    let posts = props.posts.map(({id, message, likesCount}) => <Post message={message} likesCountss={likesCount} key={id}/>);

    function addPost(formData) {
        props.addPost(formData.postText);
    }

    return (
        <div>
            <h2>My posts</h2>
            <AddPostForm onSubmit={addPost} />
            <div className={s.posts}>
                {posts}
                {/*<Post message="I'm glad to meet you, guy" likesCount='12'/>*/}
            </div>
        </div>

    );
}

const maxLength10 = maxLength(10);

let AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field component={renderTextarea} validate={[maxLength10]} name='postText' placeholder='enter post'/>
            <button>add</button>
        </form>
    );
}

AddPostForm = reduxForm({form: 'addPostForm'})(AddPostForm);

export default Posts;