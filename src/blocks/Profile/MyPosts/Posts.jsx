import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';



function Posts(props) {
    let posts = props.posts.map(({id, message, likesCount}) => <Post message={message} likesCountss={likesCount} key={id}/>);

    let newPost = React.createRef();

    function addPost() {
        props.addPost();
    }

    function updateNewTextPost() {
        let text = newPost.current.value;
        props.updateNewTextPost(text);
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