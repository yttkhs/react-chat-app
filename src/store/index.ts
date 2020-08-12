import {createStore, combineReducers, compose} from "redux";
import {userDataReducer as userData, State as UserDataState} from './storeUserData'
import {friendDataReducer as friendData, State as FriendDataState} from "./storeFriendData";

export interface RootState {
  userData: UserDataState
  friendData: FriendDataState
}

const reducers = combineReducers({
  userData,
  friendData
})

export const store = createStore(
  reducers,
  compose(
    // @ts-ignore
    process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
