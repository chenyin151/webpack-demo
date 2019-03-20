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
    entry: {
        // 'main1': [__dirname + '/src/script/main.js', __dirname + '/src/script/a.js'],
        // 'main2': __dirname + '/src/script/main.js',
        'main': __dirname + '/src/script/main.js',
        'a': __dirname + '/src/script/a.js',
        'b': __dirname + '/src/script/b.js',
        'c': __dirname + '/src/script/c.js'
    },
    // entry: {
    //     'main': __dirname + '/src/script/main.js',
    //     'a': __dirname + '/src/script/a.js'
    // },
    // 输出文件
    output: {
        // 打包的文件放在哪个目录下
        path: __dirname + '/dist',
        // 打包的文件名
        // filename: '[name]-[hash].js'
        filename: 'js/[name]_[chunkhash].js',
        // 发布上线后的服务器地址，这样一旦发布成功，项目根目录会自动替换成http://cdn.con/
        publicPath: 'http://cdn.com/'
    },
    // 引用插件的地方，我们在这里new htmlWebpackPlugin(),则会生成一个HTML文件，但是这个文件与我们自己写的index.html 
    // 没什么关联，若我们想用自己的index.html则要给它设置template
    plugins: [
        new htmlWebpackPlugin({
            // 可以给生成的html指定名称
            filename: 'a.html',
            template:'index.html',
            // script标签是放在head还是在body中
            // inject: 'body',
            inject:false,
            // inject: 'body',
            title: 'this is a.html',
            date: new Date(),
            // chunks: ['a']
            excludeChunks: ['b', 'c']  //excludeChunks是除去我指定的几个chunks之外的chunks
            // 发布会压缩文件
            // minify: {
            //     removeComments: true, //删除注释
            //     collapseWhitespace: true //删除空格
            // }
        }),
        new htmlWebpackPlugin({
            // 可以给生成的html指定名称
            filename: 'b.html',
            template:'index.html',
            // script标签是放在head还是在body中
            // inject: 'body',
            inject: false,
            title: 'this is b.html',
            date: new Date(),
            excludeChunks: ['a','c']
            // 发布会压缩文件
            // minify: {
            //     removeComments: true, //删除注释
            //     collapseWhitespace: true //删除空格
            // }
        }),
        new htmlWebpackPlugin({
            // 可以给生成的html指定名称
            filename: 'c.html',
            template:'index.html',
            // script标签是放在head还是在body中
            // inject: 'body',
            inject: false,
            title: 'this is c.html',
            date: new Date(),
            excludeChunks: ['a','b']
            // 发布会压缩文件
            // minify: {
            //     removeComments: true, //删除注释
            //     collapseWhitespace: true //删除空格
            // }
        })
    ]
}