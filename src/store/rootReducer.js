import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryChangerReducer from "./reducers/categoryChangerReducer"
import categoryChangerToggle from "./reducers/categoryChangerToggle"

const rootReducer = combineReducers({
    cart :cartReducer,
    changestate :categoryChangerReducer,
    changestatetoggle :categoryChangerToggle
})

export default rootReducer;