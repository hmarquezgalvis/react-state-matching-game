const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = env => {
  // const { entryDir } = env
  const entryDir = null;

  return {
    entry: `./${entryDir || 'src'}/index.js`,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ "babel-loader"]
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
      ]
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'docs')
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ]
  }
};
