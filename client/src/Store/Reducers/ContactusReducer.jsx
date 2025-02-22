import { ADD_CONTACT_US_RED, DELETE_CONTACT_US_RED, GET_CONTACT_US_RED, UPDATE_CONTACT_US_RED } from "../Constants"
export function ContactusReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CONTACT_US_RED:
            newState = state.push(action.payload)
            return newState
        case GET_CONTACT_US_RED:
            return action.payload
        case UPDATE_CONTACT_US_RED:
            newState = state
            index = state.findIndex((x) => x._id === action.payload._id)
            newState[index].active = action.payload.active
            return newState
        case DELETE_CONTACT_US_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}