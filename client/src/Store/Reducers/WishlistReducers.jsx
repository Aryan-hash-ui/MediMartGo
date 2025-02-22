import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED} from "../Constants"
export function WishlistReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_WISHLIST_RED:
            newState = state.push(action.payload)
            return newState
        case GET_WISHLIST_RED:
            return action.payload
        
        case DELETE_WISHLIST_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}