import { newTextPostingActionCreator, addNewPostActionCreator } from '../../../Redux/state.js';
import React from 'react';
import style from './Myposts.module.css';
import Posting from './Posting/Posting';

const Myposts = (props) => {

    const messagePost = React.createRef();

    /* send some text on state with function newTextPosting, 
    and return with props new value for textarea
    */
    const onPostChange = () => {
        props.dispatch(newTextPostingActionCreator(messagePost));

    }

    /* send click on function addPosting, and nuling the textarea*/
    const addPost = () => {
        props.dispatch(addNewPostActionCreator());
    }

    /* new maping array */
    const PostingItem = props.data.profilePage.PostingData.map((p) => <Posting messages={p.messages} like_counter={p.likeCounter} />);

    return (
        <div className={style.mypost}>
            <div>My posts</div>

            <textarea
                onChange={onPostChange}
                ref={messagePost}
                value={props.data.profilePage.newTextPosting}
            />

            <button className={style.button} onClick={addPost}>add post</button>
            {/* new arrays */}
            {PostingItem}
        </div>
    );
}

export default Myposts;