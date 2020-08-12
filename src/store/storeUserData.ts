type State = {
  userId: string,
  displayName: string,
  email: string
}

type Type = "ADD::USER_DATA" | "RESET::USER_DATA"

type Action = {
  type: Type
  payload? : State
}

const initState: State = {
  userId: '',
  displayName: '',
  email: ''
}

export const userDataAction = {
  add: (payload: State): Action => ({
    type: 'ADD::USER_DATA',
    payload: payload
  }),
  reset: (): Action => {
    return {
      type: 'RESET::USER_DATA',
    }
  }
}

export const userDataReducer = (
  state = initState,
  action: {
    type: Type,
    payload: State
  }
): State => {
  switch (action.type) {
    case 'ADD::USER_DATA':
      return {
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
