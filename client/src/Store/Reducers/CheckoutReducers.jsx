import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, UPDATE_CHECKOUT_RED,UPDATE_CHECKOUT_RED_CURRENT } from "../Constants"
export function CheckoutReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CHECKOUT_RED:
            newState = state.push(action.payload)
            return newState
        case GET_CHECKOUT_RED:
            return action.payload
        case UPDATE_CHECKOUT_RED:
            newState = state
            index = state.findIndex((x) => x._id === action.payload._id)
            newState[index].orderstatus = action.payload.orderstatus
            newState[index].paymentstatus = action.payload.paymentstatus
            return newState
         case UPDATE_CHECKOUT_RED_CURRENT:
                newState = state
                index = state.findIndex((x) => x._id === action.payload._id)
                newState[index].paymentstatus = "Done"
                return newState


        case DELETE_CHECKOUT_RED:
            newState = state
            index = state.find((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}