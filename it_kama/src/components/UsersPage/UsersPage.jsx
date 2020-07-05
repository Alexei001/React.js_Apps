
import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, name: 'Dmitry',
                    follow: true,
                    status: 'I am looking for a job right now',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuu4dy4fOi7lH5GxvLcdAoyx5Kf5A7EE7mCA&usqp=CAU',
                    location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 2, name: 'Svetlana',
                    follow: false,
                    status: 'I am so pretty',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuu4dy4fOi7lH5GxvLcdAoyx5Kf5A7EE7mCA&usqp=CAU',
                    location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 3, name: 'Serghei',
                    follow: true,
                    status: 'I like foodbal!!',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuu4dy4fOi7lH5GxvLcdAoyx5Kf5A7EE7mCA&usqp=CAU',
                    location: { city: 'Kiev', country: 'Ukraine' }
                },
                {
                    id: 4, name: 'Andrew',
                    follow: false,
                    status: 'Iam free to help you to..',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuu4dy4fOi7lH5GxvLcdAoyx5Kf5A7EE7mCA&usqp=CAU',
                    location: { city: 'Philadelphia', country: 'United States' }
                }

            ]
        )}

        const UsersComponents = props.users.map((u) => {
            return (
                <div className={style.content} key={u.id}>

                    <div className={style.ava_follow}>
                        <img src={u.img} />
                        {(u.follow === true)
                            ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                            : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
                    </div>

                    <div className={style.content_users}>

                        <div className={style.name_status}>
                            <div className={style.name}>{u.name}</div>
                            <div className={style.status}>{u.status}</div>
                        </div>

                        <div className={style.location}>
                            <div className={style.country}>{u.location.country}</div>
                            <div className={style.city}>{u.location.city}</div>
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
        </div>
    )
}

export default Users;