import './index.css';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                data={store.getState()}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);