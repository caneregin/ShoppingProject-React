export const CHANGE_CATEGORY = "CHANGE_CATEGORY"

export function changeToCategory(changestate){
    return {
        type : CHANGE_CATEGORY,
        payload: changestate
    }
}