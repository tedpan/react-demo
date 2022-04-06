import { Provider } from "react-redux"
import store from "../store"
import Child from "./Child"

export default function ReduxConnect() {
  return (
    <Provider store={store}>
      <Child></Child>
    </Provider>
  )
}
