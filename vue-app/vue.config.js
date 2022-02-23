const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 将微应用打包成 umd 库
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
