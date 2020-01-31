import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

function Posts() {
  return (
    <div>
      <h2>My posts</h2>
      <textarea></textarea>
      <button>add</button>
      <div>
        <Post message="Hi everybody! How are you?"/>
        <Post message="Hello, It's my first post"/>
        <Post message="I'm glad to meet you, guy"/>
      </div>
    </div>

  );
}

export default Posts;