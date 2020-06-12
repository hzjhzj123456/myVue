var path  = require('path');
var webpack = require('webpack');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"js/[name].js"
  },
  module:{
    rules:[
      {
        test:/\.js$/,//用正则匹配文件,用require和import引入的都会匹配到
        loader:'babel-loader',//使用的模块
        exclude:/node_modules/ //排除node_modules目录，不加载node_modules下的js文件
      },{
        test:/\.css$/,
        use:['css-loader','style-loader']
      },{
        test:/\.(png|jpe?j|gif|svg)(\?.*)*$/,
        loader:'url-loader',
        options:{
          limit:10000,
          name:'img/[name].[ext]?[hash]'
        }
      }
      // ,{
      //   test:/\.(woff2|eot|ttf|otf)(\?.*)?*/,
      //   loader:"url-loader",
      //   options:{
      //     limit:10000,
      //     name: 'img/[name].[ext]?[hash]'
      //   }
      // }
      ,{
        test:/\.less/,
        use:[
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },{
        test:/.vue$/,
        loader:'vue-loader',
        options:{
          loaders:{
            'less':[
              'vue-style-loader',//首先给vue的样式loader过滤一遍
              'css-loader',//css-loader,把css转成js
              'less-loader',//用less编译
            ]
          }
        }
      }
    ]
  },
  resolve:{
    extensions:['.js','.vue','.json'],
    //设置别名
    alias:{
      "vue$":"vue/dist/vue.esm.js",
      '@':path.resolve(__dirname,'src'),
    }
  }
}