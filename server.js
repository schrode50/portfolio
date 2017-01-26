'use strict';

const koa = require('koa');
const app = koa();

app.use(require('koa-static')(__dirname + '/public'));

app.listen(8000);
