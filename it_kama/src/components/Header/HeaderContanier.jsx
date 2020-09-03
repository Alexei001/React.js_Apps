import React from 'react';
import style from './Header.module.css';
import Header from './Header';
import * as axios from 'axios';


class HeaderContainer extends React.Component {
 componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
             console.log(response.data);
            
            });
    } 
    render() {
        return (
            <header className={style.header}>
                <Header {...this.props} />
            </header>
        );
    }
}


export default HeaderContainer;