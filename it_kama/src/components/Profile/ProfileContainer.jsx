import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUsersprofile } from '../../Redux/profile-reducer.js'
import { withRouter } from 'react-router-dom';



class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2
        }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithRouterProfileContainerData= withRouter(ProfileContainerAPI)

const ProfileContainer = connect(mapStateToProps,
    {
        setUsersprofile,
    }
)(WithRouterProfileContainerData);

export default ProfileContainer;