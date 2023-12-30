import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import AuthReducer from "./features/AuthSlice"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store);

export default store

export { persistor };