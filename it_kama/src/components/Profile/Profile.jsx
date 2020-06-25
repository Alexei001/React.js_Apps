import React from 'react';
import style from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import AvatarInfo from './AvaInfo/AvaInfo';

const Profile = (props) => {
    return (
        <div >
            <div className={style.img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3Z8WMBZxjxBMaaUPcVRhk55otWDdgRm-iyUnI30Km9XHPY73E&usqp=CAU" alt="" />
            </div>
            <AvatarInfo />
            <Myposts data={props.store.getState()} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;