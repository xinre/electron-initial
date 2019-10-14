const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack=require('webpack');
module.exports = {
    target: 'electron-renderer',
    entry: './src/index.js', //入口文件
    output: {
        filename: 'bundle.js', //编译后的文件
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
      },

    mode: 'development',
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        port: 9000, //本地开发服务器端口
        // open:true,//自动拉起浏览器
        hot:true,//热加载
    },
    plugins:[
    //热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
}