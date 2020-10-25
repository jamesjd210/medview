const path = require('path')

module.exports = {
    mode: 'production', // 'production', 'development', 'none'
    entry: './js/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, ''),
}
