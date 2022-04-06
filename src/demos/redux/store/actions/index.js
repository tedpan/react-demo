import { wait } from "@testing-library/user-event/dist/utils"
import { module1increasement, module1reverse } from "./module-1"
import { module2increasement, module2reverse } from "./module-2"

// 导出所有action creators
export {
  module1increasement,
  module1reverse,
  module2increasement,
  module2reverse,
}
// 异步action，用于thunk测试
export function asyncAction() {
  return async (dispatch, getState) => {
    const state = getState()
    dispatch(module1increasement())
    await wait(1000)
    console.log(state)
    dispatch(module1reverse())
    await wait(1000)
    console.log(state)
    dispatch(module2increasement())
    await wait(1000)
    console.log(state)
    dispatch(module2reverse())
  }
}
