import React from 'react';
import style from './AvaInfo.module.css';
import Loader from '../../common/loader';
import usersPhoto from '../../assets/images/usersPhoto.png';


const AvatarInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    return (
        <div className={style.avatar_decription}>
                {
                    (props.profile.photos.large===null)
                    ?<img src={usersPhoto} alt="" />
                    :<img src={props.profile.photos.large} alt="" />
                }
            <h5>{props.profile.fullName}</h5>
            <div>ID:{props.profile.userId}</div>
            <div className={style.aboutMe}>aboutMe</div>
            <div className={style.job_looking}>Job Looking</div>
            <div className={style.job_description}>Job Description</div>
            <div className={style.contacts}>Contacts</div>
        </div>
    );
}


export default AvatarInfo;