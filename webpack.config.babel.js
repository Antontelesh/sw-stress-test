/* eslint-env node */

import webpack from 'webpack'
import fs from 'fs'
import path from 'canonical-path'

export default {
  entry: './src/app.js',
  output: {
    filename: 'index.js',
    path: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?importLoaders=1&modules=true', 'postcss'],
      },
    ],
  },
  postcss: [
    require('postcss-import'),
    require('postcss-custom-properties'),
  ],
  plugins: [
    new webpack.DefinePlugin({
      PICTURES: JSON.stringify(fs.readdirSync(path.resolve(__dirname, './pictures'))),
    }),
  ],
}
