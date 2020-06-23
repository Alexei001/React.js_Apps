import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './Redux/state';
import { addPosting } from './Redux/state';
import {newTextPosting} from './Redux/state';

export const renderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App data={data} addPosting={addPosting}  newTextPosting={newTextPosting} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}