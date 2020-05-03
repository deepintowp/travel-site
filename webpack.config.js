const path = require('path')
const postCSSPlugins = [
    
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars')
    
]
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundeled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer:{
        before:function(app, server){
            server._watch('./app/**/*.html');

        },
        contentBase:path.join(__dirname, 'app'),
        hot:true,
        port:3000,
        host:'0.0.0.0'
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.css/i,
                use:['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}