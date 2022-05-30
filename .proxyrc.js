const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/webflow", {
      target: "https://stonks-app.webflow.io/",
      pathRewrite: {
        "^/webflow": "",
      },
      changeOrigin: true,
      secure: false,
      router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        "stonks.web.app": "http://localhost:1234",
      },
    })
  );
};
