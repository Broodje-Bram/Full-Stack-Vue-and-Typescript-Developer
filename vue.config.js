const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://app.hirechain.xyz',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
