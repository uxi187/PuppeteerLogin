const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: 'tsconfig.json',
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@constants': path.resolve(__dirname, './cypress/constants'),
      '@pages': path.resolve(__dirname, './cypress/Pages'),
      '@helpers': path.resolve(__dirname, './cypress/helpers'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}





