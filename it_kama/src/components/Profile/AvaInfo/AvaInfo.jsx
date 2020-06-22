import React from 'react';
import style from './AvaInfo.module.css';


const AvatarInfo = (props) => {
    return (
        <div className={style.avatar}>
            <img src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" alt="" />
            <h4>avatar+info</h4>
        </div>
    );
}


export default AvatarInfo;