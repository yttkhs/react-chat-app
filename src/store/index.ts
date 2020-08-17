import {createStore, combineReducers, compose} from "redux";
import {userDataReducer as userData} from './storeUserData'
import { UserDataProperties } from "../types";

export interface RootState {
  userData: UserDataProperties
}

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
