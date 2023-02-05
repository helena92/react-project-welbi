const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/graphql/',
    createProxyMiddleware({
      target: process.env.REACT_APP_GRAPHQL_API_URL,
      changeOrigin: true,
    })
  );
};
