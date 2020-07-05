import React from 'react';
import style from './Posting.module.css';
import photoUsers from '../../../assets/images/usersPhoto.png';

const Posting = (props) => {
    return (
        <div className={style.item}>
            <div className={style.item_icon}>
                <img src={photoUsers} alt="some_post"/>
            </div>
            <div className={style.item_post}>
                <div className={style.post_message}>{props.messages}</div>
                <div className={style.post_like}>like: {props.like_counter}</div>
            </div>
        </div>
    );
}

export default Posting;