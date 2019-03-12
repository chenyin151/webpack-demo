// webpack的配置文件
module.exports = {
    // 打包的入口是从哪里开始,这里不能用./,要用__dirname来获取当前文件的路径
    entry: __dirname + '/src/script/main.js',
    // 输出文件
    output: {
        // 打包的文件放在哪个目录下
        path: __dirname + '/dist/js',
        // 打包的文件名
        filename: 'bundle.js'
    }
}