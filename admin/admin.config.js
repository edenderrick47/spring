module.exports = {
    webpack: (config, webpack) => {
      delete config.resolve.alias['react-dom'];
      return config;
    }
  }
  