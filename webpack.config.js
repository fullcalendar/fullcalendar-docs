const path = require('path')
const globby = require('globby')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env, options) => {
  let isProduction = options.mode === 'production'

  return {
    mode: 'development', // unless overridden by command-line flag
    devtool: isProduction ? false : 'inline-source-map',
    entry: buildEntryMap(),
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ],
    optimization: {
      // https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
      minimizer: isProduction ? [ new OptimizeCSSAssetsPlugin({}) ] : [],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i, // TODO: better to use src/styles/images/* instead
          use: [
            { loader: 'url-loader' }
          ]
        }
      ]
    },
    output: {
      path: path.join(__dirname, 'assets'),
      filename: '[name].js' // will produce a JS file we won't use
    }
  }
}

function buildEntryMap() {
  let map = {}
  let jsPaths = globby.sync('./src/*.js')

  for (let jsPath of jsPaths) {
    let name = path.basename(jsPath, '.js')
    map[name] = jsPath
  }

  return map
}
