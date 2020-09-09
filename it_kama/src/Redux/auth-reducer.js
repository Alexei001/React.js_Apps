const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return { ...state };
    }
}

export const authActionCreator = (id, email, login) => {
    return {
        type: SET_AUTH_DATA,
        data: { id, email, login }
    }
} 