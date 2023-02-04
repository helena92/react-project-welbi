const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/graphql/',
    createProxyMiddleware({
      target: 'https://welbi.org',
      changeOrigin: true,
    })
  );
};
