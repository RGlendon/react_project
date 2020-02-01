import React from 'react';
import s from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <Posts />
    </main>
  );
}

export default Profile;