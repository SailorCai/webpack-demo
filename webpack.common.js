 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     chunkFilename: '[name].bundle.js',  //决定非入口chunk的名称
     path: path.resolve(__dirname, 'dist')
   }
 };