const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
      entry: {
          'index': [
              PATHS.source + '/js/app.js',
              PATHS.source + '/scss/style.scss'
          ]
      },
      output: {
          path: PATHS.build,
          filename: '[name].js'
      },
      module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
        ],
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: PATHS.source + '/index.html'
            }),
          new ExtractTextPlugin('./[name].css')
      ]
};