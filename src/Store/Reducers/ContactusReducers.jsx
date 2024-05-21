import { ADD_CONTACTUS_RED, DELETE_CONTACTUS_RED, GET_CONTACTUS_RED, UPDATE_CONTACTUS_RED } from "../Constants"
export function ContactusReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CONTACTUS_RED:
            newState = state.push(action.payload)
            return newState
        case GET_CONTACTUS_RED:
            return action.payload
        case UPDATE_CONTACTUS_RED:
            newState = state
            index = state.findIndex((x) => x.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_CONTACTUS_RED:
            newState = state
            index = state.find((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}