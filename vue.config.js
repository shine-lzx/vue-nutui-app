'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/shine/' : '/shine/',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 1234,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1234',
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: ` 
               @import "@/assets/customization/custom_theme.scss";
               @import "@nutui/nutui/dist/styles/index.scss";
               `,
      },
    },
  },
}
