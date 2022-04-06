import { Provider } from "react-redux"
import { storeWithThunk } from "../store"
import Child from "./Child"

export default function ReduxThunkDemo() {
  return (
    <Provider store={storeWithThunk}>
      <Child></Child>
    </Provider>
  )
}
