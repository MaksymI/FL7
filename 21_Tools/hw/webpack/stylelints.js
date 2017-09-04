const stylelint = require('stylelint');

module.exports = () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'postcss-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new stylelint('./[name].css')
  ]
});
