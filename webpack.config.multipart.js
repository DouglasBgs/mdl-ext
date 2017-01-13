const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.mode;

const libraryName = 'mdl-ext';
var outputFile;

if (env === 'build') {
  outputFile = libraryName + '.[name].min.js';
}
else {
  outputFile = libraryName + '.[name].js';
}

var config = {
  entry: {
    'utils': [path.join(__dirname, 'src/utils/index.js')],
    'accordion': path.join(__dirname, 'src/accordion/accordion.js'),
    'carousel': path.join(__dirname, 'src/carousel/carousel.js'),
    'lightboard': path.join(__dirname, 'src/lightboard/lightboard.js'),
    'lightbox': path.join(__dirname, 'src/lightbox/lightbox.js'),
    'menu-button': path.join(__dirname, 'src/menu-button/menu-button.js'),
    'selectfield': path.join(__dirname, 'src/selectfield/selectfield.js'),
    'sticky-header': path.join(__dirname, 'src/sticky-header/sticky-header.js'),
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: outputFile,
    library: [libraryName, '[name]'],
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.css', '.scss', 'html']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
};

module.exports = config;
