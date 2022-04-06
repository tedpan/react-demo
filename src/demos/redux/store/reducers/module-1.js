import * as ACTION_TYPES from "../actionTypes"

export const module1reducer = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.MODULE_ACTION_REVERSE:
      console.log(1)
      return { ...state, flag: !state.flag }
    case ACTION_TYPES.MODULE_ACTION_INCREASEMENT:
      console.log(2)
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
