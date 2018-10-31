const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const appBundle = 'app.min.js'
const buildDir = 'dist'

const base = baseConfig(appBundle, buildDir, false)
const prod = {
  mode: 'none',
  plugins: [
    new CleanWebpackPlugin([buildDir], {
      root: path.resolve(__dirname, '..')
    }),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(false)
    })
  ]
}

module.exports = merge(base, prod)