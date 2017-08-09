import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import todo from './reducers/index';

const store = createStore(
    todo
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
