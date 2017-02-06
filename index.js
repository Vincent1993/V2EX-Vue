const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({ target: 'https://www.v2ex.com', changeOrigin: true }));
app.listen(3555);
