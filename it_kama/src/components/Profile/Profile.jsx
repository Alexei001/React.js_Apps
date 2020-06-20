import React from 'react';
import style from './Profile.module.css';
import Myposts from './Myposts/Myposts';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3Z8WMBZxjxBMaaUPcVRhk55otWDdgRm-iyUnI30Km9XHPY73E&usqp=CAU" alt=""/>
            </div>
            <div className={style.avatar}>
                <img src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" alt="" />
                <h4>avatar+info</h4>
            </div>
           <Myposts/>
            </div>
    );
}

export default Profile;