module.exports = {
  filenameHashing: false,
  lintOnSave: false,
  configureWebpack: {
    entry: {
      background: './src/background.ts',
    },
    devtool: 'inline-source-map',
    node: {
      global: true,
    },
    optimization: {
      splitChunks: false,
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].excludeChunks = ['background'];
      return args;
    });
  },
};
