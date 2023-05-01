import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice/todoSlice"
import  pokemonReducer  from "./pokemonSlice/pokemonSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"

const reducers = combineReducers({
    todo: todoReducer,
    pokemons: pokemonReducer
})

const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

export default store