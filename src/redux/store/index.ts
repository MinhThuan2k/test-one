import { combineReducers, createStore } from 'redux'
import { authReducer } from '../reducers/authReducer'

const rootReducer = combineReducers({
  auth: authReducer
})

export const store = createStore(rootReducer)
export type RootStateRedux = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
