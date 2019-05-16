const path = require('path');

const object = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader :'babel-loader',
                query : {
                    presets : ['@babel/preset-env','@babel/preset-react'],
                    plugins : ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test : /\.scss$/,
                loader : ['style-loader','css-loader','sass-loader']
            }
        ]
    }
}

module.exports = object;