import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatusHook";


function ProfileInfo(props) {
    if (!props.userProfile) return <Preloader/>;

    return (
        <div>
            <div className={s.info}>
                <img className={s.background}
                     src="https://avatars.mds.yandex.net/get-pdb/1220164/731fcc94-9a7a-4a04-b01e-e85b7e683e90/s1200"
                     alt=""/>
            </div>
            <img className={s.photo} src={props.userProfile.photos.large || 'https://cdn.pricearchive.org/images/aliexpress.com/32675545831/Francoise-Nielly-Hand-painted-Marilyn-Monroe-Oil-painting-Modern-Abstract-oil-painting-on-canvas-paintings-for.jpg'}/>
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;