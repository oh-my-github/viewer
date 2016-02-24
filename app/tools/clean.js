var rimraf = require('rimraf')
var colors = require('colors')

var DIST_FILES = [
  '../index.html', '../bundle.js', '../bundle.js.map'
]

for(var i = 0; i < DIST_FILES.length; i++) {
  var file = DIST_FILES[i]

  rimraf.sync(file)
  console.log('Remove '.red + file)
}

