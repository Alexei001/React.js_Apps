import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import ItemName from './ItemName/ItemName';
import { updateMessageCreator, addTextMessageCreator } from '../../Redux/state.js';


const Dialogs = (props) => {
    /* maping old arrays */
    const DialogsItem = props.store.getState().messagesPage.DialogsData.map((d) => <ItemName name={d.name} id={d.id} />);
    const MessagesItem = props.store.getState().messagesPage.MessagesData.map((m) => <Message message={m.message} />);


    let textMessage = props.store.getState().messagesPage.newMessageBody;

    const updateMessageBody = (e) => {
        let newtextMessage = e.target.value
        props.dispatch(updateMessageCreator(newtextMessage));
    }

    const sendMessage = () => {
        props.dispatch(addTextMessageCreator())
    }

    return (
        <div>
            <div className={style.dialogs_title}>Dialogs</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_item}>
                    {/* new maping arrays */}
                    {DialogsItem}
                </div>
                <div className={style.dialogs_messages}>
                    {/* new maping arrays */}
                    {MessagesItem}
                    <div><textarea placeholder="send new message" value={textMessage} onChange={updateMessageBody} /></div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;