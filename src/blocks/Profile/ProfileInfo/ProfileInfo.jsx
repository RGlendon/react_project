import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
  return (
    <div className={s.info}>
      <img src="https://avatars.mds.yandex.net/get-pdb/1220164/731fcc94-9a7a-4a04-b01e-e85b7e683e90/s1200" alt=""/>
      My ava + information
    </div>
  );
}

export default ProfileInfo;