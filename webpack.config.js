module.exports = {
  mode: 'production',
  entry: {
    main: './dist/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};