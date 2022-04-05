import { lazy } from "react"
import { wait } from "./common.util"

/**
 *  给lazy组件设置延迟。适用场景比如防止组件加载过快、fallback消失过快导致视觉抖动。
 * @export
 * @param {*} compImport import()加载组件
 * @param {*} delay 延迟
 * @return {*}
 */
export function withDelayOnLazyComp(compImport, delay) {
  return lazy(() => {
    return Promise.all([compImport, wait(delay)]).then(
      ([compExport]) => compExport
    )
  })
}
