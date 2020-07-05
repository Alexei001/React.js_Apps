import { connect } from 'react-redux';
import UsersPage from './UsersPage';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
    
    return {
        users: state.usersItem.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(newusers)=>{
            dispatch(setUsersAC(newusers))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);
export default UsersPageContainer;