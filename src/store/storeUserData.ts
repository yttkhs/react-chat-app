import { UserDataProperties } from "../types"

type Type = "ADD::USER_DATA" | "RESET::USER_DATA"

type Action = {
  type: Type
  payload? : Partial<UserDataProperties>
}

// State
const initState: UserDataProperties = {
  userId: '',
  displayName: '',
  email: '',
  biography: '',
  friend: {}
}

// Action
export const userDataAction = {
  add: (payload: Partial<UserDataProperties>): Action => ({
    type: 'ADD::USER_DATA',
    payload: payload
  }),
  reset: (): Action => ({
    type: 'RESET::USER_DATA',
  })
}

// Reducer
export const userDataReducer = (
  state = initState,
  action: Action
): UserDataProperties => {
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
