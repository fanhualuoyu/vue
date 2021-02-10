const path = require('path')//npm init    本地的webpack安装：npm install webpack@3.6.0 --save-dev   打包：npm run build

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
}