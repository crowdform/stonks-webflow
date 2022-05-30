const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");

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
        "stonks-351516.web.app": "http://localhost:1234",
      },
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
        async (responseBuffer, proxyRes, req, res) => {
          const response = responseBuffer.toString("utf8"); // convert buffer to string

          return response.replace(
            "https://stonks-351516.web.app/legacy/app.js",
            "http://localhost:1234/app.js"
          ); // manipulate response and return the result
        }
      ),
    })
  );
};
