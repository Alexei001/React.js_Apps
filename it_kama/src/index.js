import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const data = {
  /* data of props for component Posting */
   PostingData : [
    { id: '1', messages: "Hello! how are you?", likeCounter: "3" },
    { id: '2', messages: "Hi! it's my first post!", likeCounter: "5" }
  ],


  /* arrays of data dialogs and messages */
   DialogsData : [
    { id: '1', name: 'Alex' },
    { id: '2', name: 'Vasea' },
    { id: '3', name: 'Alexandru' },
    { id: '4', name: 'Vanea' }
  ],
   MessagesData : [
    { id: '1', message: 'hello! i am Alex, and you?' },
    { id: '2', message: "Hello! how's it going" },
    { id: '3', message: 'hey you know react?' },
    { id: '4', message: 'Wat is you skill in React.js?' }
  ]
};



ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
