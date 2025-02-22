import { ADD_NEWSLETTER_RED, DELETE_NEWSLETTER_RED, GET_NEWSLETTER_RED } from "../Constants"
export function NewsletterReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_NEWSLETTER_RED:
            newState = state.push(action.payload)
            return newState
        case GET_NEWSLETTER_RED:
            return action.payload
        
        case DELETE_NEWSLETTER_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}