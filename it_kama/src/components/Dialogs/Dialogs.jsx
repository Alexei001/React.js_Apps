import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const ItemName = (props) => {
    return (
        <div className={style.item_name}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    /* maping old arrays */
    const DialogsItem = props.data.DialogsData.map((d) => <ItemName name={d.name} id={d.id} />);
    const MessagesItem =props.data.MessagesData.map((m) => <Message message={m.message} />);

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
            </div>
        </div>
    );
}


export default Dialogs;