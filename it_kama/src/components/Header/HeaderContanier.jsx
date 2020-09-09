import React from 'react';
import style from './Header.module.css';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { authActionCreator } from '../../Redux/auth-reducer.js'


class HeaderContainerRequire extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.authActionCreator(id, email, login)
                }
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

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
});
const HeaderContainer = connect(mapStateToProps, { authActionCreator })(HeaderContainerRequire);

export default HeaderContainer;