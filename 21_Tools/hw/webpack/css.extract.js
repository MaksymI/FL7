const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(sass|scss)$/,
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
    };
};