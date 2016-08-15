var path = require('path');
var webpack = require('webpack');

var PATH  ={
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname,'src')
};
module.exports = {
    // require for source-map
    devtool: 'eval',
    entry: [
        // require to load specific page on HMR
        'webpack-dev-server/client?http://localhost:4000',
        // require to automatically reload page on HMR fail
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: PATH.dist,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            // Enable caching for improved performance during development
            // It uses default OS directory by default. If you need
            // something more custom, pass a path to it.
            // I.e., babel?cacheDirectory=<path>
            loaders: ['react-hot', 'babel?cacheDirectory'],
                // Parse only app files! Without this it will go through
                // the entire project. In addition to being slow,
                // that will most likely result in an error.
            include: PATH.src
        }]
    },
    // Important! Do not remove ''. If you do, imports without
    // an extension won't work anymore!
    resolve: {
        extensions: ['', '.js', '.jsx']
        // alias: {
        //     'react': 'react-lite',
        //     'react-dom': 'react-lite'
        // }
    }
};
