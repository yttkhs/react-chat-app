type State = {
  friend: string[]
}

type Type = "ADD::FRIEND_DATA" | "RESET::FRIEND_DATA" | "DELETE::FRIEND_DATA"

type Action = {
  type: Type
  payload? : State
}

const initState: State = {
  friend: []
}

export const friendDataAction = {
  add: (payload: State): Action => ({
    type: "ADD::FRIEND_DATA",
    payload: payload
  }),
  reset: (): Action => ({
    type: "RESET::FRIEND_DATA",
  }),
  delete: (): Action => ({
    type: "DELETE::FRIEND_DATA",
  })
}

export const friendDataReducer = (
  state = initState,
  action: {
    type: Type,
    payload: State
  }
): State => {
  switch (action.type) {
    case "ADD::FRIEND_DATA":
      return {
        ...action.payload
      }
    case "RESET::FRIEND_DATA":
      return {
        ...initState
      }
    case "DELETE::FRIEND_DATA":
      return {
        ...initState
      }
    default:
      return state
  }
}
