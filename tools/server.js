import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (error) {
    if (error) {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
    } else {
        open(`http://localhost:${port}`);
    }
});