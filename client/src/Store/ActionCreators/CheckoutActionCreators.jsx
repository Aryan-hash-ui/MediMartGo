import { ADD_CHECKOUT, DELETE_CHECKOUT, GET_CHECKOUT, UPDATE_CHECKOUT,UPDATE_CHECKOUT_RED_CURRENT } from "../Constants"
export function addCheckout(data) {
    return {
        type: ADD_CHECKOUT,
        payload: data
    }
}
export function getCheckout() {
    return {
        type: GET_CHECKOUT
    }
}
export function updateCheckout(data) {
    return {
        type: UPDATE_CHECKOUT,
        payload: data
    }
}

export function updateCheckoutCurrent(data) {
    return {
        type: UPDATE_CHECKOUT_RED_CURRENT,
        payload: data
    }
}
export function deleteCheckout(data) {
    return {
        type: DELETE_CHECKOUT,
        payload:data
    }
}