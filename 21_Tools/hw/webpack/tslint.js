module.exports = () => {
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {  configuration: {
                                rules: {
                                    quotemark: [true, 'double']
                                }
                            }
                        }
            }
        ]
    }
}
