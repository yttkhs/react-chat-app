import {UserDataProperties, UserDataAction} from "../../types";

const initState: UserDataProperties = {
  userId: '',
  displayName: '',
  email: '',
  biography: '',
  friend: {}
}

export const userDataReducer = (
  state = initState,
  action: UserDataAction
) => {
  switch (action.type) {
    case 'ADD::USER_DATA':
      return {
        ...state,
        ...action.payload
      }
    case 'RESET::USER_DATA':
      return {
        ...initState
      }
    default:
      return state
  }
}
