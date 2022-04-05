import { Suspense } from "react"
import { Audio } from "react-loader-spinner"
import { withDelayOnLazyComp } from "../../../utils/react.util.js"

const LazyComp = withDelayOnLazyComp(import("../components/LazyComp.js"), 2000)
export default function DelayLazyCompHocDemo() {
  return (
    <Suspense fallback={<Audio color="#00BFFF" height={80} width={80} />}>
      <LazyComp></LazyComp>
    </Suspense>
  )
}
