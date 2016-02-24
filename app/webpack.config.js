var webpack = require('webpack');
var path = require('path');

var getPlugins = function(env) {
  var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env == 'development'
  };

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS)
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
    require('postcss-cssnext')({
      browsers: ['last 2 version', '> 5%', 'ie >= 8']
    }),
    require('postcss-reporter')({
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

  var DIST_DIR = path.join(__dirname, '../')
  var DIST_FILE = 'bundle.js'

  return {
    debug: true,
    devtool: env == 'production' ? 'source-map' : 'eval-source-map',
    noInfo: true,
    entry: getEntry(env),
    target: env == 'test' ? 'node' : 'web',
    output: {
      path: DIST_DIR,
      publicPath: '',
      filename: DIST_FILE
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env)
    },
    postcss: getPostcssPlugins()
  };
};
