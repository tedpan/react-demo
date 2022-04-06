import { useSelector, useDispatch } from "react-redux"
import {
  module1increasement,
  module1reverse,
  module2increasement,
  module2reverse,
} from "../store/actions"

function Child(props) {
  const m1State = useSelector((state) => state.m1)
  const m2State = useSelector((state) => state.m2)
  const dispatch = useDispatch()

  const m1increasement = () => {
    dispatch(module1increasement())
  }
  const m1reverse = () => {
    dispatch(module1reverse())
  }
  const m2increasement = () => {
    dispatch(module2increasement())
  }
  const m2reverse = () => {
    dispatch(module2reverse())
  }
  return (
    <div>
      <div>m1 count:{m1State.count}</div>
      <button type="button" onClick={m1increasement}>
        +
      </button>
      <div>m1 flag:{m1State.flag + ""}</div>
      <button type="button" onClick={m1reverse}>
        !
      </button>
      <div>m2 count:{m2State.count}</div>
      <button type="button" onClick={m2increasement}>
        +
      </button>
      <div>m2 flag:{m2State.flag + ""}</div>
      <button type="button" onClick={m2reverse}>
        !
      </button>
    </div>
  )
}

export default Child
