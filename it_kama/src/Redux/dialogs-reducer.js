const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE_BODY";
const ADD_NEW_MESSAGE_DATA = "ADD_NEW_MESSAGE_DATA";

let initialState = {
    /* arrays of data dialogs and messages */
    DialogsData: [
        { id: '1', name: 'Alex' },
        { id: '2', name: 'Vasea' },
        { id: '3', name: 'Alexandru' },
        { id: '4', name: 'Vanea' }
    ],
    MessagesData: [
        { id: '1', message: 'hello! i am Alexei, and you?' },
        { id: '2', message: "Hello! how's it going" },
        { id: '3', message: 'hey you know react?' },
        { id: '4', message: 'Wat is you skill in React.js?' }
    ],
    newMessageBody: ""

}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.text;
            return {
                ...state,
                newMessageBody: action.text
            };
        case ADD_NEW_MESSAGE_DATA:
            if (!state.newMessageBody == '') {
                return {
                    ...state,
                    MessagesData: [...state.MessagesData, { id: '5', message: state.newMessageBody }],
                    newMessageBody: ''
                };
            };

        default:
            return { ...state };
    }

}

export const updateMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    text: text
})
export const addTextMessageCreator = () => {
    return (
        {
            type: ADD_NEW_MESSAGE_DATA
        }
    )
}
