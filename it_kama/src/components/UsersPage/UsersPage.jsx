
import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import usersPhoto from '../assets/images/usersPhoto.png';


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response.data.items)
            });
    }



    render() {
                    let UsersComponents = this.props.users.map((u) => {
                        return (
                            <div className={style.content} key={u.id}>
                                <div className={style.ava_follow}>
                                    <img src={(!u.photos === null)
                                        ? u.photos
                                        : usersPhoto
                                    } />
                                    {(u.follow === true)
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}>follow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }}>unfollow</button>}
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
                <div className={style.Users_wrapper}>
                    <div className={style.title}>Users</div>
                    {UsersComponents}
                </div>
            </div>)
    }
}


export default Users;