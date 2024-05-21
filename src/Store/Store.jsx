import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga"

import RootSagas from "./Sagas/RootSagas"
import RootReducer from "./Reducers/RootReducer"


const sagaMiddleware = createSagaMiddleware()


const Store = configureStore({
    reducer: RootReducer,
    middleware: () => [sagaMiddleware]
})
export default Store

sagaMiddleware.run(RootSagas)