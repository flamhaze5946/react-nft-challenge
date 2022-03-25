const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(createProxyMiddleware(
        '/testnets-opensea', {
            pathRewrite: {
                '^/testnets-opensea': '/'
            },
            secure: true,
            target: 'https://testnets-api.opensea.io',
            changeOrigin: true
        }
    ))
}