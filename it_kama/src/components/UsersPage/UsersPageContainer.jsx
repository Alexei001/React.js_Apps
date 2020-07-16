import { connect } from 'react-redux';
import UsersPage from './UsersPage';
import { followAC, unfollowAC, setUsersAC, totalCountAC, curentPageAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {

    return {
        users: state.usersItem.users,
        totalCount: state.usersItem.totalCount,
        pageSize: state.usersItem.pageSize,
        curentPage: state.usersItem.curentPage
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
        setUsers: (newusers) => {
            dispatch(setUsersAC(newusers))
        },
        setTotalCount: (totalCount) => {
            dispatch(totalCountAC(totalCount))
        },
        setCurentPage: (curentPage) => {
            dispatch(curentPageAC(curentPage))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);
export default UsersPageContainer;