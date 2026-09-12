const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 10000;

app.use('/', createProxyMiddleware({
    target: 'https://duckduckgo.com',
    changeOrigin: true,
    secure: true
}));

app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
