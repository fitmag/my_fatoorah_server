// proxy-server.js
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS
app.use(cors());

// Proxy configuration
app.use('/api', createProxyMiddleware({
  target: 'https://apitest.myfatoorah.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix
  },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});