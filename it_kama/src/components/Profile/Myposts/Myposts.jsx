import React from 'react';
import style from './Myposts.module.css';
import Posting from './Posting/Posting';

const Myposts = () => {
    return (
        <div className={style.mypost}>
            <div>My posts</div>
            <textarea></textarea>
            <button className={style.button}>add post</button>
            <Posting messages='Hello! how are you?' like_counter="3"/>
            <Posting messages="Hi! it's my first post!" like_counter="5"/>
        </div>
    );
}

export default Myposts;