import {combineReducers} from "redux";
import BasketReducer from "../reducers/BasketReducer";
import SearchReducer from "../reducers/SearchReducer";

const rootReducer = combineReducers({
    basket: BasketReducer,
    search: SearchReducer
});

export default rootReducer;
