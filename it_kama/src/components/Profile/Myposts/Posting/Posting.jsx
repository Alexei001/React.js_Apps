import React from 'react';
import style from './Posting.module.css';

const Posting = (props) => {
    return (
        <div className={style.item}>
            <div className={style.item_icon}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5Ck-z8-LBBAyAk_zaAXvlsZ5GG97KQpKQqr3g7eotKm_VthZW&usqp=CAU" alt="" />
            </div>
            <div className={style.item_post}>
                <div className={style.post_message}>{props.messages}</div>
                <div className={style.post_like}>like: {props.like_counter}</div>
            </div>
        </div>
    );
}

export default Posting;