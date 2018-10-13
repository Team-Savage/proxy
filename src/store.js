import { applyMiddleware, createStore } from 'redux';
import App from './components/App.jsx';
import menuReducer from './reducers/menuReducer.js';
import allReducers from './reducers/index.js';

const store = createStore(menuReducer, window.devToolsExtension && window.devToolsExtension());

store.dispatch({
    type: 'CLICK_ITEM'
});

export default store;
