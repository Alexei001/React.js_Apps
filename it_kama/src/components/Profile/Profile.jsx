import React from 'react';
import style from './Profile.module.css';

import AvatarInfo from './AvaInfo/AvaInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {
    return (
        <div className={style.posts__inner}>
            <div className={style.photo}>
                <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3Z8WMBZxjxBMaaUPcVRhk55otWDdgRm-iyUnI30Km9XHPY73E&usqp=CAU" alt="" />
            </div>
            <AvatarInfo profile={props.profile} />
            <MypostsContainer />
        </div>
    );
}

export default Profile;