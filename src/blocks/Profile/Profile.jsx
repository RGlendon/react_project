import React from 'react';
import s from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
    <main className={s.main}>
      <ProfileInfo/>
      <Posts posts={props.profilePage.posts}
             updateNewTextPost={props.updateNewTextPost}
             newText={props.profilePage.newTextPost}
             addPost={props.addPost}/>
    </main>
  );
}

export default Profile;