import { ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constants"
export function SubcategoryReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_SUBCATEGORY_RED:
            newState = state.push(action.payload)
            return newState
        case GET_SUBCATEGORY_RED:
            return action.payload
        case UPDATE_SUBCATEGORY_RED:
            newState = state
            index = state.findIndex((x) => x.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_SUBCATEGORY_RED:
            newState = state
            index = state.find((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}