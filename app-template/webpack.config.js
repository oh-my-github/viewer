// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
var webpack = require('webpack');
var path = require('path');

var getPlugins = function(env) {
  var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env == 'development'
  };

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS) //Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch(env) {
    case 'production':
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}));
      break;
    case 'development':
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(env)}));

  return plugins;
};

var getLoaders = function(env) {
  var loaders = [
    { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint'] },
    {
      test: /(\.css)$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css?sourceMap&module&importLoaders=1', 'postcss']
    },
    { /** globally used css (for <link> in index.html) */
      test: /(\.css)$/,
      include: [
        path.join(__dirname, 'node_modules')
      ],
      loaders: ['style', 'css?sourceMap&importLoaders=1', 'postcss']
    },
    {
      test: /\.woff(\?\S*)?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.woff2(\?\S*)?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.eot(\?\S*)?$/,
      loader: 'url-loader'
    }, {
      test: /\.ttf(\?\S*)?$/,
      loader: 'url-loader'
    },
    {
      test: /\.svg(\?\S*)?$/,
      loader: 'url-loader'
    }
  ];

  return loaders;
};

var getEntry = function(env) {
  var entry = [];

  if (env == 'development') { //only want hot reloading when in dev.
    entry.push('webpack-hot-middleware/client');
  }

  entry.push('./src/index');
  return entry;
};

function getPostcssPlugins(env) {

  var browserList = ['last 10 version', '> 5%', 'ie >= 8'];

  var plugins = [
    require('postcss-url')({
      copy: 'rebase'
    }),
    require('postcss-cssnext')({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 version', '> 5%', 'ie >= 8']
    }),
    require('postcss-reporter')({ // Posts messages from plugins to the terminal
      clearMessages: true
    }),
    require('autoprefixer')({
      browsers: browserList
    }),
    require("postcss-import")()
  ];

  return plugins;
}

module.exports = function getConfig(env) {
  return {
    debug: true,
    devtool: env == 'production' ? 'source-map' : 'eval-source-map', //more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, //set to false to see a list of every file being bundled.
    entry: getEntry(env),
    target: env == 'test' ? 'node' : 'web', //necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
      path: __dirname + '/dist', //Note: Physical files are only output by the production build task `npm run build`.
      publicPath: '',
      filename: 'bundle.js'
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env)
    },
    postcss: getPostcssPlugins()
  };
};
