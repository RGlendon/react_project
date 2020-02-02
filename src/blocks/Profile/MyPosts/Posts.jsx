import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

function Posts(props) {

    let posts = props.posts.map(({id, message, likesCount}) => <Post message={message} likesCountss={likesCount}/>);
    // let posts = props.posts.map((p) => <Post message={p.message} likesCountss={p.likesCount}/>);

  return (
    <div>
      <h2>My posts</h2>
      <textarea></textarea>
      <button>add</button>
      <div className={s.posts}>
          {posts}
        {/*<Post message="I'm glad to meet you, guy" likesCount='12'/>*/}
      </div>
    </div>

  );
}

export default Posts;