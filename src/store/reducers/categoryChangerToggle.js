import { CHANGE_CATEGORY_TOGGLE } from "../actions/changeCategoryToggleActions"

const changestatetoggle = {
    payload: "false"
}

const reducertoggle = (state = changestatetoggle, { type, payload }) => {
    switch (type) {
        case CHANGE_CATEGORY_TOGGLE:
            return {
                payload
            }
        default:
            return state;
    }
}
export default reducertoggle