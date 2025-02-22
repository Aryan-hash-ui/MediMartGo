import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants"
export function MaincategoryReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            newState = state.push(action.payload)
            return newState
        case GET_MAINCATEGORY_RED:
            return action.payload
        case UPDATE_MAINCATEGORY_RED:
            newState = state
            index = state.findIndex((x) => x._id === action.payload._id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_MAINCATEGORY_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}