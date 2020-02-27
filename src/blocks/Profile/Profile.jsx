import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";


function Profile() {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <PostsContainer />
        </main>
    );
}

export default Profile;