import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import authSlice from "./authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  blogs: blogSlice,
  auth: authSlice 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    }),
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store
export const persistor = persistStore(store)