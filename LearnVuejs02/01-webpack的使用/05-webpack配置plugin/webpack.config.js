const path = require('path')//npm init    本地的webpack安装：npm install webpack@3.6.0 --save-dev   打包：npm run build
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    //publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "less-loader",
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //import时可以取消后缀名
    extensions: ['.js','.css','.vue'],
    alias: {
      'vue$' : 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归ffr所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
}