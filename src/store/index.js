import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const INITIAL_STATE = {
  token: "",
  balance: 0
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, ewally)

function ewally(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log(action)
      return {
        token: action.token,
        balance: action.balance
      }
    default:
      return state;
  }
}

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor };
