//application boot
var express = require('express');
var app = express();
var config = require('./config/config.json');
app.set('config', config);

//require middlewares
var store = require('./middlewares/store/interface.js')(app);
//app.set('store', store);

app.use(store.connect);

var routes = require('./routes.js');

app.route('/').get(routes['index']);

app.listen(config.express.port, config.express.ip);
