import express from 'express';
import path from 'path';
import webpackConfig from './webpack.config.dev';
import controllers from './server/controllers';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler  = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler,{
  	publicPath: webpackConfig.output.publicPath,
  	noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(controllers);

app.get('/*', function(req, res) {
  //var text  = path.resolve(__dirname, 'public/index.html') + ' & ' +  __dirname;
  //  /app/public/index.html & /app
  res.sendFile(path.join(__dirname, 'public/index.html'));
   //res.send(text);
});

app.listen(port, () => console.log('Server running...'));
