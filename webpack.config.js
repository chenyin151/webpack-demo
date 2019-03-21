// webpack的配置文件
// 引入html-webpack-plugin插件
const path = require('path');
console.log(">>>>>>>>>>>>",__dirname);
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 打包的入口是从哪里开始,这里不能用./,要用__dirname来获取当前文件的路径，entry有3中表现形式：
    // 1.字符串：这个适用于单个文件
    // 2.数组：适用于两个同级入口文件
    // 3.对象：可以生成多个输出文件
    // entry: __dirname + '/src/script/main.js',
    // entry: [__dirname + '/src/script/main.js', __dirname + '/src/script/a.js'],
    // 这种写法其实等价于数组写法,但是区别是给了数组写法起了一个名字，在下面的output中可以动态修改输出文件名
    entry: './src/app.js',
    // entry: {
    //     'main': __dirname + '/src/script/main.js',
    //     'a': __dirname + '/src/script/a.js'
    // },
    // 输出文件
    output: {
       path: __dirname + '/dist',
       filename: 'js/[name].bundle.js'
    },
    // 模块加载器,当检测是js文件则运用babel解析器去解析js代码，query指定了用babel来解析哪个版本的ES文件
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    // 引用插件的地方，我们在这里new htmlWebpackPlugin(),则会生成一个HTML文件，但是这个文件与我们自己写的index.html 
    // 没什么关联，若我们想用自己的index.html则要给它设置template
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}