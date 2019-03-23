module.exports = {
    plugins: [
        require('autoprefixer')({
            // browsers: ['last 5 version']
            browsers: ['>0.01%'] //加入所有浏览器前缀
        })
    ]
}