import {UserDataProperties} from "../../types";

export const userDataAction = {
  add: (payload: Partial<UserDataProperties>) => ({
    type: 'ADD::USER_DATA',
    payload: payload
  }),
  reset: () => ({
    type: 'RESET::USER_DATA',
  })
}
