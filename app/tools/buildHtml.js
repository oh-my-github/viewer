var fs = require('fs')
var path = require('path')
var colors = require('colors')
var cheerio = require('cheerio')

var useTrackJs = true /** set true if you want to use trackJS */
var trackJsToken = ''   /** trackJS token */
var trackJsCode = ''

if (useTrackJs) {
  if (trackJsToken) {
    trackJsCode = "<!-- BEGIN TRACKJS Note: This should be the first <script> on the page per https://my.trackjs.com/install --><script>window._trackJs = { token: '" + trackJsToken + "' }</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script><!-- END TRACKJS -->"
  } else {
    console.log('To track JavaScript errors, sign up for a free trial at TrackJS.com and enter your token in /tools/build.html on line 10.'.yellow)
  }
}

var INDEX_HTML = 'index.html'
var SRC_DIR = 'src/'
var SRC_PATH = path.join(SRC_DIR, INDEX_HTML)

var data = fs.readFileSync(SRC_PATH, 'utf8')

var $ = cheerio.load(data)
$('head').prepend(trackJsCode)

var DIST_DIR = '../'
var DIST_PATH = path.join(DIST_DIR, INDEX_HTML)

fs.writeFileSync(DIST_PATH, $.html(), 'utf8')
console.log(('' + DIST_PATH + ' was created').green)
