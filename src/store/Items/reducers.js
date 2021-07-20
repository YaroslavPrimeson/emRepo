import {SAVE_ITEMS} from './actions';

const defaultState = {
    items: [],
}

export const itemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_ITEMS:
            return {...state, items: action.payload};
        default:
            return state;
    }
}