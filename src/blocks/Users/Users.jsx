import React from "react";
import s from './Users.module.css';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


function Users(props) {
    return (
        <div>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       portionSize={'10'}
                       setCurrentPage={props.setCurrentPage}/>
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
                                    ? <button disabled={props.disabled.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.unfollowThunkCreator(u.id);
                                              }}>Unfollow</button>
                                    : <button disabled={props.disabled.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.followThunkCreator(u.id);
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