import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.post}>
      <img src="https://avatars.mds.yandex.net/get-pdb/1870458/6f323742-dfd9-4c4a-abef-acb76a2130c8/s1200" alt="" />
      <span className="text">{props.message}</span>
      <button className="like">like</button>
    </div>


  );
}

export default Post;