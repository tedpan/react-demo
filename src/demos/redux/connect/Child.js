import { connect } from "react-redux"
import {
  module1increasement,
  module1reverse,
  module2increasement,
  module2reverse,
} from "../store/actions"

function Child(props) {
  return (
    <div>
      <div>m1 count:{props.m1.count}</div>
      <button type="button" onClick={props.module1increasement}>
        +
      </button>
      <div>m1 flag:{props.m1.flag + ""}</div>
      <button type="button" onClick={props.module1reverse}>
        !
      </button>
      <div>m2 count:{props.m2.count}</div>
      <button type="button" onClick={props.module2increasement}>
        +
      </button>
      <div>m2 flag:{props.m2.flag + ""}</div>
      <button type="button" onClick={props.module2reverse}>
        !
      </button>
    </div>
  )
}

export default connect((state) => state, {
  module1increasement,
  module1reverse,
  module2increasement,
  module2reverse,
})(Child)
