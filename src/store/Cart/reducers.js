import {SAVE_CART} from './actions';
import {SHOW_CART} from './actions';

const defaultState = {
    cart: [],
    show: false,
}

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_CART:
            return {...state, cart: action.payload};
        case SHOW_CART:
            return {...state, show: action.payload};
        default:
            return state;
    }
}