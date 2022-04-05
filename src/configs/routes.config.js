const routeFiles = require.context("../demos", true, /demo\.js$/)
const routes = []
routeFiles.keys().forEach((filePath) => {
  const path = filePath.match(/\.\/(.+)\/demo\.js/)[1]
  const comp = routeFiles(filePath).default
  routes.push({
    path,
    comp,
  })
})

export default routes
