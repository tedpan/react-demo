const { addLessLoader, adjustStyleLoaders, override } = require("customize-cra")

module.exports = override(
  addLessLoader({
    lessOptions: {
      strictMath: true,
      noIeCompat: true,
      localIdentName: "[local]--[hash:base64:5]",
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options
    postcss.options = { postcssOptions }
  })
)
