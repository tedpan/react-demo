import { Suspense } from "react"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { Grid } from "react-loader-spinner"
import routeConfigs from "../../configs/routes.config"
import "./index.css"
import { withDelayOnLazyComp } from "../../utils/react.util"

function Content({ className }) {
  const defaultRouteElem = routeConfigs.map(({ path }) => (
    <Link key={path} to={path} style={{ marginRight: 20 }}>
      {path}
    </Link>
  ))
  const mainRoutes = routeConfigs.map(({ path }) => {
    const Elem = withDelayOnLazyComp(import(`../../demos/${path}/demo.js`))
    return <Route key={path} path={path} element={<Elem></Elem>}></Route>
  })

  // 方式2
  // const defaultRoute = { path: "/", element: defaultRouteElem }
  // const ContentRoutes = useRoutes([
  //   defaultRoute,
  //   ...routeConfigs.map(({ path, comp }) => ({ path, element: comp() })),
  // ])
  //   <ContentRoutes></ContentRoutes>

  return (
    <div className={`${className} content`}>
      <BrowserRouter>
        <Suspense fallback={<Grid color="#00BFFF" height={30} width={30} />}>
          <Routes>
            <Route key="/" path="/" element={defaultRouteElem}></Route>
            {mainRoutes}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default Content
