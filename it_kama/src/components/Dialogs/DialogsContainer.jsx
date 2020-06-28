import React from 'react';
import { updateMessageCreator, addTextMessageCreator } from '../../Redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import {StoreContext} from '../../Redux/StoreContext.js';


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let textMessage = state.messagesPage.newMessageBody;

                const DialogsItem = state.messagesPage.DialogsData;
                const MessagesItem = state.messagesPage.MessagesData;

                const updateMessage = (newtextMessage) => {
                    store.dispatch(updateMessageCreator(newtextMessage));
                }

                const sendMessage = () => {
                    store.dispatch(addTextMessageCreator())
                }



                return (<Dialogs
                    updateMessageBody={updateMessage}
                    sendMessage={sendMessage}
                    textMessage={textMessage}
                    DialogsItem={DialogsItem}
                    MessagesItem={MessagesItem}
                />)


                
            }}

        </StoreContext.Consumer>


    );
}


export default DialogsContainer;