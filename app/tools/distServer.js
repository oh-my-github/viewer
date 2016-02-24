var path = require('path')
var browserSync = require('browser-sync')

var DIST_DIR = path.join(__dirname, '../../')

console.log(DIST_DIR)

browserSync({
  port: 3000,
  ui: { port: 3001 },
  server: {
    baseDir: [DIST_DIR],
    routes: { '/oh-my-github': './', },
  },
})
