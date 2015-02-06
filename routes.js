module.exports = function (io) {
    return {
        index: function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        },
        insert: function (req, res) {
            req.store
                .insert({ title: "express api", content: "test insert" })
                    .then(function (result) {
                        console.log(result);
                        res.send('hey'+"\n");
                    });
        }//,
        // listen: function (req, res) {
        //     io.on('connection', function (socket) {
        //         socket.emit('news', { hello: 'world' });
        //         socket.on('my other event', function (data) {
        //             console.log(data);
        //         });
        //     });
        // }
    }
};
