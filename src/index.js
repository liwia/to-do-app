import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import setupFirebase from './setupFirebase';
import App from './App';
import ToDoFirebase from './ToDoFirebase'
import registerServiceWorker from './registerServiceWorker';

setupFirebase();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
