import {createStore, combineReducers} from "redux";
import {userDataReducer} from './storeUserData'
import {friendDataReducer} from "./storeFriendData";

const reducers = combineReducers({
  userDataReducer,
  friendDataReducer
})

export const store = createStore(reducers)
