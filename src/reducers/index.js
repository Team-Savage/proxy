import { combineReducers } from 'redux';
import menuReducer from './menuReducer.js';

export const allReducers = combineReducers({
    menu: menuReducer
})