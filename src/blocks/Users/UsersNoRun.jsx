import React from "react";
import s from './Users.module.css';
import * as axios from "axios";

// const use = [
//     {
//         id: 1,
//         fullName: 'Petr Olegovich',
//         status: 'I am good',
//         location: {country: 'Russia', city: 'Moscow'},
//         photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
//         followed: false,
//     },
//     {
//         id: 2,
//         fullName: 'Rita',
//         status: 'I am good too',
//         location: {country: 'Russia', city: 'Belev'},
//         photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
//         followed: true,
//     },
//     {
//         id: 3,
//         fullName: 'Dmitry',
//         status: 'norm',
//         location: {country: 'Belarus', city: 'Minsk'},
//         photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1620281/2493ea28-7421-49f6-b90a-470b66b2cf01/s1200',
//         followed: true,
//     },
// ];

const UsersNoRun = (props) => {
    if (props.users.length === 0) {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(resp => {
                // console.log(resp);
                props.setUsers(resp.data.items);
            })
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.userWrapper}>
                            <div>
                                <img
                                    src={u.photos.small ? u.photos.small : 'https://cdn.pricearchive.org/images/aliexpress.com/32675545831/Francoise-Nielly-Hand-painted-Marilyn-Monroe-Oil-painting-Modern-Abstract-oil-painting-on-canvas-paintings-for.jpg'}
                                    alt={'ава'} className={s.photo}/>
                                <div>
                                    <button
                                        onClick={() => props.followToggle(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </div>
                            <div className={s.mainInfo}>
                                <div>
                                    <p>{u.fullName}</p>
                                    <p>{u.status}</p>
                                </div>
                                <div>
                                    <p>{'u.location.country'}</p>
                                    <p>{'u.location.city'}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default UsersNoRun;