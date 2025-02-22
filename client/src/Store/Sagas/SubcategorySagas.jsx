import { takeEvery, put } from "redux-saga/effects"
import { ADD_SUBCATEGORY, ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constants"
import { addRecord, deleteRecord, getRecord, updateRecord } from "./Services/SubcategoryServices"

function* add(action) {                                     //executer
    let response = yield addRecord(action.payload)
    yield put({ type: ADD_SUBCATEGORY_RED, payload: response.data })
}

function* get() {                                               //executer
    let response = yield getRecord()
    yield put({ type: GET_SUBCATEGORY_RED, payload: response.data })
}

function* update(action) {                                      //executer
    yield updateRecord(action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })
}

function* deleteItem(action) {                                  //executer
    yield deleteRecord(action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })
}

export default function* SubcategorySagas() {                  //watcher
    yield takeEvery(ADD_SUBCATEGORY, add)
    yield takeEvery(GET_SUBCATEGORY, get)
    yield takeEvery(UPDATE_SUBCATEGORY, update)
    yield takeEvery(DELETE_SUBCATEGORY, deleteItem)
}