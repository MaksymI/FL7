const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const extractCSS = require('./webpack/css.extract');
const typescript = require('./webpack/typescript');
const tslint = require('./webpack/tslint');
const stylelints = require('./webpack/stylelints');
const deleteBuild = require('./webpack/deleteBuild');


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = merge([
    {
        entry: {
            'index': [
                PATHS.source + '/js/app.ts',
                PATHS.source + '/scss/style.scss'
            ]
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.source + '/index.html'
              })
        ]
    },
    deleteBuild(),
    extractCSS(),
    typescript(),
    tslint(),
    stylelints()
]);
