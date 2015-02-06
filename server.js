//application boot
var express = require('express');
var app = express();
var config = require('./config/config.json');

//var tmpApp = express();
var server = require('http').Server(app);
server.listen(4000);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

app.set('config', config);

//require middlewares
var store = require('./middlewares/store/interface.js')(app);
//app.set('store', store);

app.use(store.connect);

var routes = require('./routes.js')(io);

app.route('/').get(routes.index);
app.route('/insert').get(routes.insert);

app.listen(config.express.port, 'localhost');//, config.express.ip);
