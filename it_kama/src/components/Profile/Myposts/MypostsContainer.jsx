import { newTextPostingActionCreator, addNewPostActionCreator } from '../../../Redux/profile-reducer.js';
import React from 'react';
import Myposts from './Myposts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        PostingItem: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (messagePost) => {
            dispatch(newTextPostingActionCreator(messagePost))
        },
        addPost: () => {
            dispatch(addNewPostActionCreator());
        }
    }
}


const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;