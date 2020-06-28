import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

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
            ],
            newMessageBody: ""

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;