import { ADD_BRAND_RED, DELETE_BRAND_RED, GET_BRAND_RED, UPDATE_BRAND_RED } from "../Constants"
export function BrandReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_BRAND_RED:
            newState = state.push(action.payload)
            return newState
        case GET_BRAND_RED:
            return action.payload
        case UPDATE_BRAND_RED:
            newState = state
            index = state.findIndex((x) => x._id === action.payload._id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_BRAND_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}