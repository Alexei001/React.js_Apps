import React from 'react';
import style from './ItemName.module.css';
import { NavLink } from 'react-router-dom';

const ItemName = (props) => {
    
    return (
        <div className={style.item_name}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default ItemName;