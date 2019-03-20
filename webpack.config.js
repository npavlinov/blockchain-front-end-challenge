const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './client/src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-env']
          }
        }
      ]
  },
  output: {
    path: path.resolve(__dirname, 'client/public/dist'),
    filename: 'bundle.js'
  }
}
