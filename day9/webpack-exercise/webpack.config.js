const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.[hash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|gif|bmp|jpeg|png)$/g,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),  //清除 输出目录
        new HtmlWebpackPlugin({  // 将 template 属性指定的 html 打包输出 到 dist 目录
            path: './dist',
            template: './src/index.html'
        })
    ]
};
