import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import routes from "../../configs/routes.config"
import "./index.css"

function Content({ className }) {
  const defaultRouteComp = routes.map(({ path }) => (
    <Link key={path} to={path} style={{ marginRight: 20 }}>
      {path}
    </Link>
  ))

  return (
    <div className={`${className} content`}>
      <BrowserRouter>
        <Routes>
          <Route key="/" path="/" element={defaultRouteComp}></Route>
          {routes.map(({ path, comp }) => (
            <Route key={path} path={path} element={comp()}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Content
