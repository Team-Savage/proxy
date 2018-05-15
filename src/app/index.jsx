import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/Proxy-Table-Component/App.jsx';
import { Provider } from 'react-redux';
import store from '../store.js'
import combineReducers from '../reducers/index.js';
import menuReducer from '../reducers/menuReducer.js';


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
  );