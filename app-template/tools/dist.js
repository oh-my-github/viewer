var fs = require('fs')
var path = require('path')

var ENCODING = 'utf-8'

function copyFile(src, dest) {

  console.log('copying ' + src + ' to ' + dest)

  var result = fs.readFileSync(src, ENCODING)
  fs.writeFileSync(dest, result, ENCODING)
}


var YO_TEMPLATE_DIR = '../generator-omg-basic/generators/app/templates'

copyFile('dist/bundle.js', path.join(YO_TEMPLATE_DIR, 'bundle.js'))
copyFile('dist/index.html', path.join(YO_TEMPLATE_DIR, 'index.html'))

