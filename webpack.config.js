module.exports = {
  mode: 'production',
  entry: './src/ts/main.ts',
  output: {
    path: `${__dirname}/dist/assets/js`,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};
