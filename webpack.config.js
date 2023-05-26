const path = require('path');
const HWP = require('html-webpack-plugin'); 
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
           },
        }]
      
    },
    
    plugins:[
        new HWP({template: path.join(__dirname,'/src/index.html')})
    ]
}