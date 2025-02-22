import { takeEvery, put } from "redux-saga/effects"
import { ADD_CHECKOUT, ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constants"
import { addRecord, deleteRecord, getRecord, updateRecord } from "./Services/CheckoutServices"

function* add(action) {                                     //executer
    let response = yield addRecord(action.payload)
    yield put({ type: ADD_CHECKOUT_RED, payload: response.data })
}

function* get() {                                               //executer
    let response = yield getRecord()
    console.log("Saga Check",response)
    yield put({ type: GET_CHECKOUT_RED, payload: response.data })
}

function* update(action) {                                      //executer
    yield updateRecord(action.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })
}

function* deleteItem(action) {                                  //executer
    yield deleteRecord(action.payload)
    yield put({ type: DELETE_CHECKOUT_RED, payload: action.payload })
}

export default function* CheckoutSagas() {                  //watcher
    yield takeEvery(ADD_CHECKOUT, add)
    yield takeEvery(GET_CHECKOUT, get)
    yield takeEvery(UPDATE_CHECKOUT, update)
    yield takeEvery(DELETE_CHECKOUT, deleteItem)
}