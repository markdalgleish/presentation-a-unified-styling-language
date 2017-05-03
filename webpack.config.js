var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = [
  {
    entry: './src/index.js',

    output: {
      filename: 'index.js',
      path: 'dist',
      publicPath: '/'
    },

    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.styl$/, loader: 'style!css!postcss!stylus', exclude: /node_modules/ },
        { test: /\.(jpg|jpeg|png|gif|svg|mp4|m4v)$/, loader: 'file', exclude: /node_modules/ }
      ]
    },

    postcss: function() {
      return [
        autoprefixer
      ];
    }
  },
  {
    entry: './src/render.js',

    output: {
      filename: 'render.js',
      path: 'dist',
      publicPath: '/',
      libraryTarget: 'umd'
    },

    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.styl$/, loader: 'ignore', exclude: /node_modules/ },
        { test: /\.(jpg|jpeg|png|gif|svg|mp4|m4v)$/, loader: 'file', exclude: /node_modules/ },
        { test: /\.pug$/, loader: 'pug' }
      ]
    },

    plugins: [
      new StaticSiteGeneratorPlugin('render.js', ['/'], {})
    ]
  }
];
