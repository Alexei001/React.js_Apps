import React from 'react';
import style from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div>
            <div className={style.dialogs_title}>Dialogs</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_item}>
                    <div className={style.item_name}>Alex</div>
                    <div className={style.item_name}>Vasea</div>
                    <div className={style.item_name}>Alexandru</div>
                    <div className={style.item_name}>Vanea</div>
                </div>
                <div className={style.dialogs_messages}>
                    <div className={style.message}>hello! i am Alex, and you?</div>
                    <div className={style.message}>Hello! how's it going</div>
                    <div className={style.message}>hey you know react?</div>
                    <div className={style.message}>Wat is you skill in React.js?</div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;