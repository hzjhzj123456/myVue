const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractRootCss = new ExtractTextPlugin('stylesheets/[name].css');
const ExtracVueCss = new ExtractTextPlugin('stylesheets/[name]/[name].css');
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    })
  ])
}
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js"
  },
  devServer:{
    contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,//用正则匹配文件,用require和import引入的都会匹配到
        loader: 'babel-loader',//使用的模块
        exclude: /node_modules/ //排除node_modules目录，不加载node_modules下的js文件
      }, {
        test: /\.css$/,
        use: ExtractRootCss.extract({
          fallback:'style-loader',
          use:'css-loader',
        })
      }, {
        test: /\.(png|jpe?j|gif|svg)(\?.*)*$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]'
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
      , {
        test: /\.less$/,
        use: ExtractRootCss.extract({
          fallback:'style-loader',
          use:[
            'css-loader',
            'less-loader'
          ]
        })
      }, {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'css':ExtracVueCss.extract({
              fallback:'vue-style-loader',
              use:'css-loader'
            }),
            'less':ExtracVueCss.extract({
              fallback:'vue-style-loader',
              use:[
                'css-loader',
                'less-loader'
              ]
            })
          }
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        tiltle:'vueDemo',
        template:'./index.html'
      }
    ),
    new webpack.HotModuleReplacementPlugin(),//热更新 webpack自带 无需再另行下载
    ExtractRootCss,
    ExtracVueCss,
  ],
  externals:{
    'jquery':'window.jQuery'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    //设置别名
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      '@': path.resolve(__dirname, 'src'),
    }
  }
}
