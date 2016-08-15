var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var PORT = 4000;
var IP = 'localhost';

new WebpackDevServer(webpack(config), {
    quiet: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(PORT, IP, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening AT : ' + IP + ':' + PORT);
});
