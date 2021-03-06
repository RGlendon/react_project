import React from 'react';
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";



function Friends(props) {

  let friend = props.friends.map(({name, src, id}) => <Friend name={name} src={src} key={id}/>)

  return (
    <div className={s.friends}>
      <h2 className={s.title}>Friends</h2>
      <div className={s.wrapper}>
        {friend}
      </div>
    </div>
  );
}

export default Friends;