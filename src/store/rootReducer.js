import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryChangerReducer from "./reducers/categoryChangerReducer"

const rootReducer = combineReducers({
    cart :cartReducer,
    changestate :categoryChangerReducer
})

export default rootReducer;