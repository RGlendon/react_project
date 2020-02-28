import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


function ProfileInfo(props) {
    if (!props.userProfile) return <Preloader/>;

    return (
        <div>
            <div className={s.info}>
                <img className={s.background}
                     src="https://avatars.mds.yandex.net/get-pdb/1220164/731fcc94-9a7a-4a04-b01e-e85b7e683e90/s1200"
                     alt=""/>
                My ava + information
            </div>
            <img src={props.userProfile.photos.large}/>
        </div>
    );
}

export default ProfileInfo;