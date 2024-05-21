import { ADD_TESTIMONIAL_RED, DELETE_TESTIMONIAL_RED, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL_RED } from "../Constants"
export function TestimonialReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_TESTIMONIAL_RED:
            newState = state.push(action.payload)
            return newState
        case GET_TESTIMONIAL_RED:
            return action.payload
        case UPDATE_TESTIMONIAL_RED:
            newState = state
            index = state.findIndex((x) => x.id === action.payload.id)
            newState[index].name = action.payload.name
            newState[index].profile = action.payload.profile
            newState[index].pic = action.payload.pic
            newState[index].message = action.payload.message

            return newState
        case DELETE_TESTIMONIAL_RED:
            newState = state
            index = state.find((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}