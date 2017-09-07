var path= require('path');
//在内存中根据参照文件(template.html),生成一个index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',//入口文件
    output:{ //打包的输出文件
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',//在内存中生成的文件
            template: './template.html' //参照文件
        })
    ]
}