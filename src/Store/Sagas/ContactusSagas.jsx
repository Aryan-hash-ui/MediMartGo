import { takeEvery, put } from "redux-saga/effects"
import { ADD_CONTACTUS, ADD_CONTACTUS_RED, DELETE_CONTACTUS, DELETE_CONTACTUS_RED, GET_CONTACTUS, GET_CONTACTUS_RED, UPDATE_CONTACTUS, UPDATE_CONTACTUS_RED } from "../Constants"
import { addRecord, deleteRecord, getRecord, updateRecord } from "./Services/BrandServices"

function* add(action) {                                     //executer
    let response = yield addRecord(action.payload)
    yield put({ type: ADD_CONTACTUS_RED, payload: response })
}

function* get() {                                               //executer
    let response = yield getRecord()
    yield put({ type: GET_CONTACTUS_RED, payload: response })
}

function* update(action) {                                      //executer
    yield updateRecord(action.payload)
    yield put({ type: UPDATE_CONTACTUS_RED, payload: action.payload })
}

function* deleteItem(action) {                                  //executer
    yield deleteRecord(action.payload)
    yield put({ type: DELETE_CONTACTUS_RED, payload: action.payload })
}

export default function* ContactusSagas() {                  //watcher
    yield takeEvery(ADD_CONTACTUS, add)
    yield takeEvery(GET_CONTACTUS, get)
    yield takeEvery(UPDATE_CONTACTUS, update)
    yield takeEvery(DELETE_CONTACTUS, deleteItem)
}