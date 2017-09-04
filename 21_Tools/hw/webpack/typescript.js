module.exports = () => ({
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
        },
        output: {
          filename: '[name].js'
        }
});