import { ADD_CART_RED, DELETE_CART_RED, GET_CART_RED, UPDATE_CART_RED } from "../Constants"
export function CartReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CART_RED:
            newState = state.push(action.payload)
            return newState
        case GET_CART_RED:
            return action.payload
        case UPDATE_CART_RED:
            newState = state
            index = state.findIndex((x) => x._id === action.payload._id)
            newState[index].qty = action.payload.qty
            newState[index].total = action.payload.total
            return newState
        case DELETE_CART_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}