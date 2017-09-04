const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => ({
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
            new ExtractTextPlugin('./[name].css')
        ]
});