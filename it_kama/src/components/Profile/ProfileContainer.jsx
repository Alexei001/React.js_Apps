import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUsersprofile } from '../../Redux/profile-reducer.js'



class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8392`)
            .then(response => {
                console.log(response.data)
                this.props.setUsersprofile(response.data)
            });
    }


    render() {

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}




let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.UsersProfile
    }
}

const ProfileContainer = connect(mapStateToProps,
    {
        setUsersprofile,
    }
)(ProfileContainerAPI);

export default ProfileContainer;