const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';

let initialState = {
    /* data of props for component Posting */
    users: [],
    totalCount: 0,
    pageSize: 100,
    curentPage: 1
}

export const usersReducer = (state = initialState, action) => {
    /* add new post */

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.newusers]
            };
        case GET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_CURENT_PAGE:
            return {
                ...state,
                curentPage: action.curentPage
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (newusers) => ({ type: SET_USERS, newusers })

export const totalCountAC = (totalCount) => ({ type: GET_TOTAL_COUNT, totalCount })
export const curentPageAC = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage })