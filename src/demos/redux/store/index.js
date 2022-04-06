import { createStore, applyMiddleware } from "redux"
import * as states from "./states"
import reducers from "./reducers"
import thunk from "redux-thunk"
// 使用devtools，还要装个插件，不像vue内置，汗颜~
import {
  devToolsEnhancer,
  composeWithDevTools,
} from "@redux-devtools/extension"

export const storeWithThunk = createStore(
  reducers,
  states,
  composeWithDevTools(applyMiddleware(thunk))
)

const store = createStore(reducers, states, devToolsEnhancer())
export default store
