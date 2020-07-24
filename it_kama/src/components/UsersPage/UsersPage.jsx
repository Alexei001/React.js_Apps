
import React from 'react';
import style from './Users.module.css';
import usersPhoto from '../assets/images/usersPhoto.png';
import { NavLink } from 'react-router-dom';

const UsersPage = (props) => {

    let numPages = Math.ceil(props.totalCount / props.pageSize);
    let arrPages = [];
    for (let i = 1; i <= numPages; i++) {
        arrPages.push(i)
    }
    let UsersComponents = props.users.map((u) => {
        return (
            <div className={style.content} key={u.id}>
                <div className={style.ava_follow}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={(!u.photos.small === null)
                            ? u.photos.small
                            : usersPhoto
                        } />
                    </NavLink>
                    {(u.follow === true)
                        ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                        : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
                </div>

                <div className={style.content_users}>

                    <div className={style.name_status}>
                        <div className={style.name}>{u.name}</div>
                        <div className={style.status}>{
                            (!u.status === null)
                                ? u.status
                                : 'some text status'
                        }</div>
                    </div>

                    <div className={style.location}>
                        <div className={style.country}>country</div>
                        <div className={style.city}>city</div>
                    </div>
                </div>

            </div>)
    });
    return (
        <div>
            <div>
                {arrPages.map((e) =>
                    (props.curentPage === e)
                        ? <span key={e} className={style.pageFix} onClick={() => { props.updateCurentPage(e) }}>{e}</span>
                        : <span key={e} onClick={() => { props.updateCurentPage(e) }}>{e}</span>
                )}
            </div>
            <div className={style.Users_wrapper}>
                <div className={style.title}>Users</div>
                {UsersComponents}
            </div>
        </div>
    )
}

export default UsersPage;