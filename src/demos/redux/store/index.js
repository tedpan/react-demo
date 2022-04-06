import { createStore } from "redux"
import * as states from "./states"
import reducers from "./reducers"
// 使用devtools，还要装个插件，不像vue内置，汗颜~
import { devToolsEnhancer } from "@redux-devtools/extension"

const store = createStore(reducers, states, devToolsEnhancer())
export default store
