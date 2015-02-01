var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hey'+"\n");
});

app.listen(3000, '0.0.0.0');
