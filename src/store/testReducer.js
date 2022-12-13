import { testTypes } from "./types"

const initialState = {
  user: {},
  users: [],
  modalEdit: false,
  currentPage: 1,
  error: false,
  isLoading: false,
}
let newUsers = []

export const testReducer = (state = initialState, action) => {
  switch (action.type) {

    case testTypes.GET_USERS:

      return { ...state, users: action.payload.users }

    case testTypes.PAGIN_SWITCH:

      return { ...state, currentPage: action.payload.num }

    case testTypes.EDIT_USER:
      newUsers = []
      for (let user of state.users) {
        if (user.id != action.payload.changes.id) {
          newUsers.push(user)
        } else if (user.id == action.payload.changes.id) {
          user.firstName = action.payload.changes.firstName
          user.lastName = action.payload.changes.lastName
          user.email = action.payload.changes.email
          newUsers.push(user)
        }
      }
      return { ...state, users: newUsers }

    case testTypes.DELETE_USER:
      newUsers = []
      for (let user of state.users) {
        if (user.id != action.payload.id) {
          newUsers.push(user)
        }
      }
      return { ...state, users: newUsers }

    case testTypes.MODAL_EDIT_OPEN:

      return { ...state, modalEdit: action.payload.id }

    default:
      return state;
  }
}