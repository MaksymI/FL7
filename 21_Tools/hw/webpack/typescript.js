module.exports = function(paths) {
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
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'build')
        }
    };
};