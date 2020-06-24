const NEW_TEXT_POSTING = "NEW-TEXT-POSTING";
const ADD_NEW_POST = "ADD-NEW-POST";


const store = {
    _state: {
        profilePage: {
            /* data of props for component Posting */
            PostingData: [
                { id: '1', messages: "Hello! how are you?", likeCounter: "3" },
                { id: '2', messages: "Hi! it's my first post!", likeCounter: "5" },

            ],
            newTextPosting: "Hello it's my first React Project"
        },
        messagesPage: {
            /* arrays of data dialogs and messages */
            DialogsData: [
                { id: '1', name: 'Alex' },
                { id: '2', name: 'Vasea' },
                { id: '3', name: 'Alexandru' },
                { id: '4', name: 'Vanea' }
            ],
            MessagesData: [
                { id: '1', message: 'hello! i am Alex, and you?' },
                { id: '2', message: "Hello! how's it going" },
                { id: '3', message: 'hey you know react?' },
                { id: '4', message: 'Wat is you skill in React.js?' }
            ]

        }
    },
    _callSubscriber() { },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            if (!this._state.profilePage.newTextPosting == '') {
                let newObj = {
                    id: '3',
                    messages: this._state.profilePage.newTextPosting,
                    likeCounter: '6'
                }
                this._state.profilePage.PostingData.push(newObj);
                this._state.profilePage.newTextPosting = '';
                this._callSubscriber(this._state);
            }
        } else if (action.type === NEW_TEXT_POSTING) {
            this._state.profilePage.newTextPosting = action.textPosting;
            this._callSubscriber(this._state);
        }
    }

}
export const newTextPostingActionCreator = (messagePost) => ({
    type: NEW_TEXT_POSTING,
    textPosting: messagePost.current.value
})

export const addNewPostActionCreator = () => ({
    type: ADD_NEW_POST
})


export default store;
window.store = store;