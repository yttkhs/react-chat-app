import {createStore, combineReducers, compose} from "redux";
import {userDataReducer as userData} from './reducers/userDataReducer'

const reducers = combineReducers({
  userData
})

export const store = createStore(
  reducers,
  compose(
    // @ts-ignore
    process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
