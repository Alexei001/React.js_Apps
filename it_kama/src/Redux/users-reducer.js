const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    /* data of props for component Posting */
    users: [],
    totalCount: 0,
    pageSize: 100,
    curentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (newusers) => ({ type: SET_USERS, newusers })

export const setTotalCount = (totalCount) => ({ type: GET_TOTAL_COUNT, totalCount })
export const setCurentPage = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage })
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

