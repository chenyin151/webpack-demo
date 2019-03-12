// webpack的配置文件
module.exports = {
    // 打包的入口是从哪里开始,这里不能用./,要用__dirname来获取当前文件的路径，entry有3中表现形式：
    // 1.字符串：这个适用于单个文件
    // 2.数组：适用于两个同级入口文件
    // 3.对象：可以生成多个输出文件
    // entry: __dirname + '/src/script/main.js',
    // entry: [__dirname + '/src/script/main.js', __dirname + '/src/script/a.js'],
    // 这种写法其实等价于数组写法,但是区别是给了数组写法起了一个名字，在下面的output中可以动态修改输出文件名
    entry: {
        'main': [__dirname + '/src/script/main.js', __dirname + '/src/script/a.js']
    },
    // entry: {
    //     'main': __dirname + '/src/script/main.js',
    //     'a': __dirname + '/src/script/a.js'
    // },
    // 输出文件
    output: {
        // 打包的文件放在哪个目录下
        path: __dirname + '/dist/js',
        // 打包的文件名
        // filename: '[name]-[hash].js'
        filename: '[name].js'
    }
}