import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import ItemName from './ItemName/ItemName';


const Dialogs = (props) => {
    const dataInput = React.createRef();

    const alertTextInput = () => {
        alert(dataInput.current.value);
    }

    /* maping old arrays */
    const DialogsItem = props.data.messagesPage.DialogsData.map((d) => <ItemName name={d.name} id={d.id} />);
    const MessagesItem = props.data.messagesPage.MessagesData.map((m) => <Message message={m.message} />);

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
                </div>
                <input type="button" value="alert" onClick={alertTextInput} /><input type="text" ref={dataInput} />
            </div>
        </div>
    );
}


export default Dialogs;