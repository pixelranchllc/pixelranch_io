const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/david/ProjectsCode/pixelranch_io/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/david/ProjectsCode/pixelranch_io/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/david/ProjectsCode/pixelranch_io/src/pages/index.jsx"))),
  "component---src-pages-success-jsx": hot(preferDefault(require("/Users/david/ProjectsCode/pixelranch_io/src/pages/success.jsx")))
}

