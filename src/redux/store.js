import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage/session'
import { authReducer, rootReducer } from './reducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth']
}

const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
}

const mainReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  root: rootReducer
})

const persistedReducer = persistReducer(rootPersistConfig, mainReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)