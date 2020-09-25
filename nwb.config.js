module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    extractCSS: {
      filename: process.env.NODE_ENV === 'production' ? `[name].[contenthash:8].css` : '[name].css'
    }
  }
}
