

const NEW_TEXT_POSTING = "NEW-TEXT-POSTING";
const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
    /* data of props for component Posting */
    PostingData: [
        { id: '1', messages: "Hello! how are you?", likeCounter: "3" },
        { id: '2', messages: "Hi! it's my first post!", likeCounter: "5" },

    ],
    newTextPosting: "Hello it's my first React Project"
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
                state.PostingData.push(newObj);
                state.newTextPosting = '';
            }
            return state;
        case NEW_TEXT_POSTING:
            state.newTextPosting = action.textPosting;
            return state;
        default:
            return state;
    }
}

export const newTextPostingActionCreator = (messagePost) => ({
    type: NEW_TEXT_POSTING,
    textPosting: messagePost.current.value
})

export const addNewPostActionCreator = () => ({
    type: ADD_NEW_POST
})