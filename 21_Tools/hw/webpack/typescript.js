const path = require('path');
module.exports = () => {
    return {
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: [ ".tsx", ".ts", ".js" ]
        },
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, 'build')
        }
    };
};