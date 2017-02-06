const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({ target: 'http://www.v2ex.com', changeOrigin: true }));
app.listen(3555);
