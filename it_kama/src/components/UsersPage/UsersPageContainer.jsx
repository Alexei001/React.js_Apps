import { connect } from 'react-redux';
import UsersPage from './UsersPage';
import * as axios from 'axios';
import { followAC, unfollowAC, setUsersAC, totalCountAC, curentPageAC, toggleIsFetchingAC } from '../../Redux/users-reducer';
import React from 'react'
import Loader from '../common/loader';


class UsersPageAPI extends React.Component {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
                this.props.setFetching(false)
            });
            
    }


    updateCurentPage = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false)
            });
    }
    render() {
        return (
            <div>
                { (this.props.isFetching===true)?<Loader /> :null }
                <UsersPage
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    curentPage={this.props.curentPage}
                    updateCurentPage={this.updateCurentPage}

                />
            </div>)

    }

}


let mapStateToProps = (state) => {

    return {
        users: state.usersItem.users,
        totalCount: state.usersItem.totalCount,
        pageSize: state.usersItem.pageSize,
        curentPage: state.usersItem.curentPage,
        isFetching:state.usersItem.isFetching
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
        },
        setFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageAPI);
export default UsersPageContainer;