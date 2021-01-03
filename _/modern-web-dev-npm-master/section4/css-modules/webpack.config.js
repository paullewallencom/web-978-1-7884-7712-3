// Inspired by: https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2
const moment = require('moment');
const webpack = require('webpack');
const path = require('path');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './static');

module.exports = function (env) {
  const isProd = env && env.prod;
  const isDev = !isProd;
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.[hash].bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProd ? 'production' : 'development'),
        CONFIG_ENV: JSON.stringify(process.env.CONFIG_ENV || 'development'),
        VERSION: JSON.stringify(process.env.VERSION || 'Unknown'),
        BUILD_DATE: JSON.stringify(moment().format()),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new ForceCaseSensitivityPlugin(),
    new HtmlWebpackPlugin({
      template: 'indexTemplate.html',
      inject: 'body',
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new UglifyJSPlugin(),
      new CompressionPlugin(
      {
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      })
    );
  }

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }


  return {
    //eval for hot reload, inline-source-map for debug
    devtool: isProd ? 'source-map' : 'inline-source-map',
    context: sourcePath,
    entry: {
      js: _.compact([
        isDev && 'react-hot-loader/patch',
        './index.js',
      ]),
      vendor: ['react', 'react-dom']
    },
    output: {
      path: staticsPath,
      publicPath: '/',
      filename: 'app.[hash].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName:"[path]_[local]--[hash:base64:6]"
              }
            },
            'sass-loader',
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: _.compact([
            isDev && 'react-hot-loader/webpack',
            'babel-loader'
          ]),
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "filer-loader"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader?limit=10000"
        }
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.scss'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
    },
    plugins,
    performance: isProd && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './src',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: isDev,
      hot: isDev,
      host: '0.0.0.0',
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
