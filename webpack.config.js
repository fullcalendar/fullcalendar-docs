const path = require('path')
const globby = require('globby')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'development', // overridden with --mode flag
  devtool: 'inline-source-map', // overridden with --devtool/--no-devtool flags
  entry: buildEntryMap(),
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: { // only for 'production' mode
    minimizer: [
      '...', // add to existing
      new CssMinimizerPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ]
      },
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

function buildEntryMap() {
  let map = {}
  let jsPaths = globby.sync('./src/*.js')

  for (let jsPath of jsPaths) {
    let name = path.basename(jsPath, '.js')
    map[name] = jsPath
  }

  return map
}
