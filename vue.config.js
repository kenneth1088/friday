module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      '^/api': {
        target: 'http://app:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
