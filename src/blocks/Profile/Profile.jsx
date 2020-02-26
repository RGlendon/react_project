import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";


function Profile(props) {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </main>
    );
}

export default Profile;