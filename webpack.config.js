var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        'main': './src/main.js'
    },

    devServer: {
    },

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        path: path.resolve('./dist')
    },
    module: {
        loaders: [{
          test: /\.js?$/,
          loaders: ['babel'],
          exclude: /node_modules/
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.woff(2)?(\?[\s\S])?$/,
            loader: "url?limit=1000000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot)(\?[\s\S])?$/,
            loader: "file"
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: 'url?limit=1000000'
        }]
    },
    htmlLoader: {
        root: path.resolve(__dirname, './src/assets')
    },
    resolve: {
        extensions: ['', '.js'],
        moduleDirectories: ['node_modules'],
        root: path.resolve('./src')
    },
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    plugins: []
};

module.exports = config;
