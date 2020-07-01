import React from 'react';
import { updateMessageCreator, addTextMessageCreator } from '../../Redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    let messages=state.messagesPage;
    return {
        
        DialogsItem: messages.DialogsData,
        MessagesItem: messages.MessagesData,
        textMessage: messages.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody : (newtextMessage) => {
            dispatch(updateMessageCreator(newtextMessage));
        },

        sendMessage : () => {
            dispatch(addTextMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;