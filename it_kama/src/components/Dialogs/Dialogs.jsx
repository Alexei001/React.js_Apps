import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import ItemName from './ItemName/ItemName';



const Dialogs = (props) => {
    /* maping old arrays */
    const DialogsItemComponent = props.DialogsItem.map((d) => <ItemName key={d.id} name={d.name} id={d.id} />);
    const MessagesItemComponent = props.MessagesItem.map((m) => <Message key={m.id} message={m.message} />);


    const updateMessageBody = (e) => {
        let newtextMessage = e.target.value
        props.updateMessageBody(newtextMessage);
    }

    const sendMessageText = () => {
        props.sendMessage();
    }

    return (
        <div>
            <div className={style.dialogs_title}>Dialogs</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_item}>
                    {/* new maping arrays */}
                    {DialogsItemComponent}
                </div>
                <div className={style.dialogs_messages}>
                    {/* new maping arrays */}
                    {MessagesItemComponent}
                    <div><textarea placeholder="send new message" value={props.textMessage} onChange={updateMessageBody} /></div>
                    <button onClick={sendMessageText}>send</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;