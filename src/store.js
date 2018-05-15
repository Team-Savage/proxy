import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './components/App.jsx';
import menuReducer from './reducers/menuReducer.js';
import allReducers from './reducers/index.js';

const store = createStore(menuReducer, window.devToolsExtension && window.devToolsExtension());

store.dispatch({
    type: 'CLICK_ITEM'
});

export default store;
