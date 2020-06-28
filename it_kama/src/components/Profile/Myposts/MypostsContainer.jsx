import { newTextPostingActionCreator, addNewPostActionCreator } from '../../../Redux/profile-reducer.js';
import React from 'react';
import Myposts from './Myposts';
import { StoreContext } from '../../../Redux/StoreContext.js';

const MypostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onPostChange = (messagePost) => {
                    store.dispatch(newTextPostingActionCreator(messagePost))
                }
                /* send click on function addPosting, and nuling the textarea*/
                const addPost = () => {
                    store.dispatch(addNewPostActionCreator());
                }

                /* new maping array */
                const PostingItem = store.getState();

                return (
                    <Myposts onPostChange={onPostChange}
                        addPost={addPost}
                        PostingItem={PostingItem.profilePage}
                    />
                )
            }}

        </StoreContext.Consumer>


    );
}

export default MypostsContainer;