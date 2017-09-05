const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
      entry: PATHS.source + '/js/app.js',
      output: {
          path: PATHS.build,
          filename: 'bundle.js'
      },
      module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: PATHS.source + '/index.html'
            })
      ]
};