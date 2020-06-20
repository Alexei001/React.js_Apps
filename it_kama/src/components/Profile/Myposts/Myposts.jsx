import React from 'react';
import style from './Myposts.module.css';

const Myposts = () => {
    return (
        <div className={style.mypost}>
            <div>My posts</div>
            <textarea></textarea>
            <button>add_Post</button>
            <div className={style.item}>
                <div className={style.iconpost}></div>
                <h5>post1</h5>
            </div>

        </div>
    );
}

export default Myposts;