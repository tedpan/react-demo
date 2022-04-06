import style from "./index.module.css"

export default function CssModuleDemo() {
  return (
    <div className={style["css-module-demo"]}>
      使用css module形式引入样式文件，cra默认支持*.module.*样式文件名使用css
      module。
    </div>
  )
}
