import {combineReducers} from "redux";
import BasketReducer from "../reducers/BasketReducer";

const rootReducer = combineReducers({
    basket: BasketReducer,
});

export default rootReducer;
