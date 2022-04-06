import { combineReducers } from "redux"
import { module1reducer } from "./module-1"
import { module2reducer } from "./module-2"

const reducers = combineReducers({
  m1: module1reducer,
  m2: module2reducer,
})

export default reducers
