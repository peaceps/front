var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts',
    },

    devServer: {
        proxy: [{
            path: '/login',
            target: 'http://localhost:3001'
        },
        {
            path: '/mz/p/v1/states',
            target: 'http://localhost:3001'
        },
        {
            path: '/logout',
            target: 'http://localhost:3001'
        }, {
            path: '/mz/r/v1/oam/accountManagement/loggedUsers',
            target: 'http://localhost:3001'
        }, {
            path: '/mz/r/v1/oam/accountManagement/keepAliveUser',
            target: 'http://localhost:3001'
        },
        {
            path: '/mz/p/v1/pbts/1',
            target: 'http://localhost:3001'
        }],
    },

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        path: path.resolve('./dist')
    },
    module: {
        loaders: [{
          test: /\.svg$/,
          loader: 'svg-sprite?' + JSON.stringify({
            name: '[name]',
            angularBaseWorkaround:true,
            prefixize: true
          })
        },{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            loaders: ['to-string', 'css-loader', 'postcss-loader', 'sass-loader']
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
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/compass-mixins/lib'),
            path.resolve('./src/scss')
        ]
    },
    postcss: function() {
        return [require('autoprefixer')];
    },
    htmlLoader: {
        root: path.resolve(__dirname, './src/assets')
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.scss'],
        moduleDirectories: ['node_modules'],
        root: path.resolve('./src')
    },
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false},
        //     mangle: false
        // })
    ]
};

module.exports = config;
