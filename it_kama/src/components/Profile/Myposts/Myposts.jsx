
import React from 'react';
import style from './Myposts.module.css';
import Posting from './Posting/Posting';

const Myposts = (props) => {

    const messagePost = React.createRef();

    /* send some text on state with function newTextPosting, 
    and return with props new value for textarea
    */
    const onPostChange = () => props.onPostChange(messagePost);

    /* send click on function addPosting, and nuling the textarea*/
    const addPost = () => props.addPost();

    /* new maping array */
    const PostingComponents = props.PostingItem.PostingData.map((p) => <Posting messages={p.messages} like_counter={p.likeCounter} />);

    return (
        <div className={style.mypost}>
            <div>My posts</div>
            <textarea
                onChange={onPostChange}
                ref={messagePost}
                value={props.PostingItem.newTextPosting}
            />
            <button className={style.button} onClick={addPost}>add post</button>
            {/* new arrays */}
            {PostingComponents}
        </div>
    );
}

export default Myposts;