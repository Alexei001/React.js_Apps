import React from 'react';
import style from './Myposts.module.css';
import Posting from './Posting/Posting';

const Myposts = (props) => {
   

    /* new maping array */
    const PostingItem = props.PostingData.map((p) => <Posting messages={p.messages} like_counter={p.likeCounter} />);

    return (
        <div className={style.mypost}>
            <div>My posts</div>
            <textarea></textarea>
            <button className={style.button}>add post</button>
            {/* new arrays */}
            {PostingItem}
        </div>
    );
}

export default Myposts;