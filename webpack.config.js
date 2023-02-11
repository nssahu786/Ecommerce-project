module.exports = {
    // ... other configurations ...
    devServer: {
      disableHostCheck: true,
      port: 3000,
      hot: true,
      contentBase: './dist',
      historyApiFallback: true,
    },
  };
  