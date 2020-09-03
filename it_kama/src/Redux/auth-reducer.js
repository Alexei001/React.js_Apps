const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return { ...state };
    }

}

export const authCreator = (userId, email, login) => ({
    type: SET_AUTH_DATA,
    data: { userId, email, login }
})

