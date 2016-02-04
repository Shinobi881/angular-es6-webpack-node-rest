
module.exports = {
  entry: './client/app/app.js',
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] }
    ]
  } 
}