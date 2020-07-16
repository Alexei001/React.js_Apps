
import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import usersPhoto from '../assets/images/usersPhoto.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
    }


    updateCurentPage = (pageNumber) => {
        this.props.setCurentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    }
    render() {
        let numPages = Math.ceil(this.props.totalCount / this.props.pageSize);
        let arrPages = [];
        for (let i = 1; i <= numPages; i++) {
            arrPages.push(i)
        }

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
                <div>
                    totalCount:{this.props.totalCount}
                    <br />
                        item per page:{this.props.pageSize}
                    <br />
                        NumPages:{numPages}
                    <br />
                    CurentPAge:{this.props.curentPage}<br />
                    {arrPages.map((e) =>
                        (this.props.curentPage === e)
                            ? <span key={e} className={style.pageFix} onClick={() => { this.updateCurentPage(e) }}>{e}</span>
                            : <span key={e} onClick={() => { this.updateCurentPage(e) }}>{e}</span>
                    )}
                </div>
                <div className={style.Users_wrapper}>
                    <div className={style.title}>Users</div>
                    {UsersComponents}
                </div>
            </div>)
    }
}


export default Users;