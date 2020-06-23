
import { renderEntireTree } from '../render';


const state = {
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
};
/* primeste value of textarea in posting components, 
and rewrite state in newTextPosting ,
send props for textarea for rewriting,
and render new VDOM
*/
export const newTextPosting = (textPosting) => {
    state.profilePage.newTextPosting = textPosting;
    renderEntireTree(state);
}
/* 
controleaza daca textarea este fara sau cu litere,
and pushing in state postingData new textmessage, for only render new component,
rerender VDOM
*/
export const addPosting = () => {
    if (!state.profilePage.newTextPosting == '') {
        let newObj = {
            id: '3',
            messages: state.profilePage.newTextPosting,
            likeCounter: '6'
        }
        state.profilePage.PostingData.push(newObj);
        state.profilePage.newTextPosting = '';
        renderEntireTree(state);
    }

}

export default state;