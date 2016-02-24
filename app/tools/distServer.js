var path = require('path')
var browserSync = require('browser-sync')

var DIST_DIR = path.join(__dirname, '../../')

browserSync({
  port: 3000,
  ui: { port: 3001 },
  server: {
    baseDir: [DIST_DIR],
    /** `routes` value is which folder to serve (relative to your current working directory) */
    routes: { '/oh-my-github': '..', },
  },
})
