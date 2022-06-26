import { CHANGE_CATEGORY } from "../actions/categoryChangerActions";

const changestate = {
    payload: "TumUrunler"
}

const reducer = (state = changestate, { type, payload }) => {
    switch (type) {
        case CHANGE_CATEGORY:
            return {
                payload
            }
        default:
            return state;
    }
}
export default reducer