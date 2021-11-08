const path = require('path')
const {
  override,
  addBabelPlugins,
  addBundleVisualizer,
} = require('customize-cra')

const resolveModules = () => (config) => {
  config.resolve = Object.assign({}, config.resolve, {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  })
  return config
}

module.exports = override(
  ...addBabelPlugins('@loadable/babel-plugin'),
  resolveModules(),
  process.env.ANALYZE && addBundleVisualizer()
)
