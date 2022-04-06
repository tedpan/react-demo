import * as ACTION_TYPES from "../actionTypes"

export const module2reducer = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.MODULE_2_ACTION_REVERSE:
      return { ...state, flag: !state.flag }
    case ACTION_TYPES.MODULE_2_ACTION_INCREASEMENT:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
