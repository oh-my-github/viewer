var fs = require('fs')
var path = require('path')

var browserSync = require('browser-sync')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfigBuilder = require('../webpack.config')
var webpackConfig = webpackConfigBuilder('development')

var bundler = webpack(webpackConfig)

var DIR_DIST = path.join(__dirname, '../../')
var FILE_PROFILE = 'oh-my-github.json'
var PATH_DIST_PROFILE = path.join(DIR_DIST, FILE_PROFILE)

var BASE_DIR = ['src']
var ROUTES = {}

try {
  /** use user's oh-my-github.json for convenience if exists */
  var fsStat = fs.statSync(PATH_DIST_PROFILE)
  BASE_DIR.push('../')
  ROUTES = { '/oh-my-github': '../' }
} catch (e) {
  /**
   * can't find `../../oh-my-github.json`
   * ignore error and use default profile in ../app/resource
   */
  var DIR_RESOURCE = 'resource'
  BASE_DIR.push(DIR_RESOURCE)
  ROUTES = { '/oh-my-github': DIR_RESOURCE }
}

browserSync({
  server: {
    baseDir: BASE_DIR,

    /** `routes` value is which folder to serve (relative to your current working directory) */
    routes: ROUTES,

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),

      webpackHotMiddleware(bundler)
    ]
  },

  files: ['src/*.html'],
})
