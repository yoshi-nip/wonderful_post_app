const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // 自分のcssやsassのエントリをここに追加する
    application: [
      './app/javascript/packs/application.js',
      './app/assets/stylesheets/application.scss',
    ],
  },
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'app/assets/javascripts/packs'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|scss|less|css)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app/javascript')],
    extensions: ['.js', '.json','.tsx', '.wasm','.sass','.scss','.css'],
    fallback: {
      "util": false,
      "assert": false,
      "path": false,
      "os": false,
      "stream": false  },
  },
};

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
