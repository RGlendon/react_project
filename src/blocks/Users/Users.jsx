import React from "react";
import s from './Users.module.css';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

function Users(props) {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pageNumbersWrapper}>{
                pages.map(p => {
                    return <span
                        className={`${s.pageNumber} ${props.currentPage === p ? s.selectedPage : null}`}
                        onClick={() => {
                            props.setCurrentPage(p)
                        }} key={p}>{p}</span>
                })}
            </div>
            {props.isLoading ? <Preloader/> : null}
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.userWrapper}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small ? u.photos.small : 'https://cdn.pricearchive.org/images/aliexpress.com/32675545831/Francoise-Nielly-Hand-painted-Marilyn-Monroe-Oil-painting-Modern-Abstract-oil-painting-on-canvas-paintings-for.jpg'}
                                    alt={'ава'} className={s.photo}/>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button disabled={props.disabled.some(id => id === u.id)} onClick={() => {
                                        // debugger
                                        props.makeDisable(true, u.id);
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    'api-key': '951be1b4-e53d-4f02-b7b3-34c9b3cb8b52'
                                                }
                                            })
                                            .then(resp => {
                                                // console.log(resp);
                                                if (resp.data.resultCode === 0) {
                                                    props.followToggle(u.id);
                                                }
                                                props.makeDisable(false, u.id);
                                            });
                                    }}>Unfollow</button>
                                    : <button disabled={props.disabled.some(id => id === u.id)} onClick={() => {
                                        // debugger
                                        props.makeDisable(true, u.id);
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'api-key': '951be1b4-e53d-4f02-b7b3-34c9b3cb8b52'
                                                }
                                            })
                                            .then(resp => {
                                                console.log(resp);
                                                if (resp.data.resultCode === 0) {
                                                    props.followToggle(u.id);
                                                }
                                                props.makeDisable(false, u.id);
                                            });
                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.mainInfo}>
                            <div>
                                <p>{u.name}</p>
                                <p>{u.status}</p>
                            </div>
                            <div>
                                <p>{'u.location.country'}</p>
                                <p>{'u.location.city'}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;