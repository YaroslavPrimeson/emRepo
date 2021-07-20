import {combineReducers} from "redux";
import {cartReducer} from './Cart/reducers'
import {itemReducer} from "./Items/reducers";


export default combineReducers({
    cart:cartReducer,
    item:itemReducer,
})