import style from "./index.module.less"

export default function LessModuleDemo() {
  return (
    <div className={style["less-module-demo"]}>
      使用css module形式引入样式文件，cra默认支持*.module.*样式文件名使用css
      module编译。
    </div>
  )
}
