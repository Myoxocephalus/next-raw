module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
    const extension = pluginOptions.extension || /\.txt$/
  
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        config.module.rules.push({
          test: extension,
          use: [
            {
              loader: 'raw-loader',
              options: pluginOptions.options,
            },
          ],
        })
  
        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options)
        }
  
        return config
      },
    })
  }