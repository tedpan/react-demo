import { Suspense, lazy } from "react"
import { Audio } from "react-loader-spinner"
import { wait } from "../../../utils/common.util.js"
const LazyComp = lazy(() => {
  return wait(3000, import("../components/LazyComp.js"))
})

export default function LazyCompDemo() {
  return (
    <Suspense fallback={<Audio color="#00BFFF" height={80} width={80} />}>
      <LazyComp></LazyComp>
    </Suspense>
  )
}
