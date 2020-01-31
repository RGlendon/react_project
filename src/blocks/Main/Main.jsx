import React from 'react';
import s from './Main.module.css';
import Posts from './MyPosts/Posts';

function Main() {
  return (
    <main className={s.main}>
      <img src="https://avatars.mds.yandex.net/get-pdb/1220164/731fcc94-9a7a-4a04-b01e-e85b7e683e90/s1200" alt=""/>
      My ava + information
      <Posts />
    </main>
  );
}

export default Main;