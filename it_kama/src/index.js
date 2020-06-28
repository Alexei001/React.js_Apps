import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreContext, Provider} from './Redux/StoreContext';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={store}>
                <App  />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
});