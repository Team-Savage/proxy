import { CLICK_ITEM } from '../actions/menuActions.js';

export default function menuReducer(state={
    display: false,
    appetizersDisplay: true,
    mainsDisplay: false,
    beveragesDisplay: false,
    extrasDisplay: false,
    appetizerData: [],
    mainData: [],
    beverageData: [],
    extraFoodData: [],
    selectedItems: []
}, action) {
    switch (action.type) {
        case "CLICK_ITEM" :
        return Object.assign({}, state, {
            selectedItems: action.payload
        });
    default: 
        return state;
    }
}