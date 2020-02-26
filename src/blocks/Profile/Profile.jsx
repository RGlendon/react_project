import React from 'react';
import s from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
    <main className={s.main}>
      <ProfileInfo/>
      <Posts posts={props.profilePage.posts}
             newText={props.profilePage.newTextPost}
             dispatch={props.dispatch}/>
    </main>
  );
}

export default Profile;