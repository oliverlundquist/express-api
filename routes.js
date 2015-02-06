var Promise = require("bluebird");

module.exports = function (io) {
    return {
        index: function (req, res) {

            req.store.all(function (err, cursor) { cursor.each(function(err, v) {io.sockets.emit('news', v);}); } );
            // req.store.dis();
            res.sendFile(__dirname + '/public/index.html');

            //////////////////////////////////////
            //
            //  Bad example of error handling.
            //  This will crash the server.
            //
            //////////////////////////////////////
            // req.store.all(function (err, cursor) {
            //     if (err) throw new Error(err);
            //     cursor.each(console.log);
            // });

            //////////////////////////////////////
            //
            //  Better example, will not crash in case of exception.
            //
            //////////////////////////////////////
            // return new Promise(function (resolve, reject) {
            //     req.store.all(function (err, cursor) {
            //         if (err) return reject(new Error(err));
            //         return resolve(cursor);
            //         //res.sendFile(__dirname + '/public/index.html');
            //     });
            // })
            // .then(function (cursor) { cursor.each(console.log); console.log(cursor); res.sendFile(__dirname + '/public/index.html'); })
            // .catch(Error, function (e) { console.log(e); });
        },
        insert: function (req, res) {
            req.store
                .insert({ title: "express api", content: "test insert" })
                    .then(function (result) {
                        // console.log(result);
                        res.send('ping'+"\n");
                        console.log('ping');
                    });
        }
    }
};
