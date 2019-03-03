const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts']
  }
}
