import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


function ProfileInfo(props) {
    if (!props.userProfile) return <Preloader/>;

    return (
        <div>
            <div className={s.info}>
                <img className={s.background}
                     src="https://avatars.mds.yandex.net/get-pdb/1220164/731fcc94-9a7a-4a04-b01e-e85b7e683e90/s1200"
                     alt=""/>
            </div>
            <img src={props.userProfile.photos.large}/>
            <ProfileStatus status={'Hello everyone'}/>
        </div>
    );
}

export default ProfileInfo;