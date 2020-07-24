

const NEW_TEXT_POSTING = "NEW-TEXT-POSTING";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
    /* data of props for component Posting */
    PostingData: [
        { id: '1', messages: "Hello! how are you?", likeCounter: "3" },
        { id: '2', messages: "Hi! it's my first post!", likeCounter: "5" },

    ],
    newTextPosting: "Hello it's my first React Project",
    UsersProfile: null
}

export const profileReducer = (state = initialState, action) => {
    /* add new post */

    switch (action.type) {
        case ADD_NEW_POST:
            if (!state.newTextPosting == '') {
                let newObj = {
                    id: '3',
                    messages: state.newTextPosting,
                    likeCounter: '6'
                }
                return {
                    ...state,
                    PostingData: [...state.PostingData, newObj],
                    newTextPosting: ''
                };
            }

        case NEW_TEXT_POSTING:
            return {
                ...state,
                newTextPosting: action.textPosting
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                UsersProfile: action.profile
            }
        default:
            return { ...state };
    }
}

export const newTextPostingActionCreator = (messagePost) => ({
    type: NEW_TEXT_POSTING,
    textPosting: messagePost.current.value
})

export const addNewPostActionCreator = () => ({
    type: ADD_NEW_POST
})
export const setUsersprofile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile
})