import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import { contactsReducer} from "./tasks/contact";
import { filterReducer } from "./tasks/filter";
import { AuthorizationReducer } from "./authorization/slice";


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['token']
}

export const rootReducer = combineReducers({
  authorization: persistReducer(persistConfig, AuthorizationReducer),
  contacts: contactsReducer,
  filter: filterReducer,
  })

  

  export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

export const persistor = persistStore(store)
