import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import FoodReducer from "./Reducers/FoodReducer"
import CartReducer from "./Reducers/CartReducer"

const persistConfig = {
    key: 'root',
    storage,
}
const reducer = combineReducers({
    food: FoodReducer,
    cart: CartReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})