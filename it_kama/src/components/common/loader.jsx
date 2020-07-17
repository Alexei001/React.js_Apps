import React from 'react';
import loaderImg from '../assets/images/Bubble-Preloader-1-1.gif';
import style from './loader.module.css'
const Loader = () => {
    return (
        <div className={style.itemImg}>
            <img className={style.img}  src={loaderImg} />
        </div>
    )
}

export default Loader;