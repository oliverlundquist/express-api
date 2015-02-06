var r = require('rethinkdb');

module.exports = {
    connection: null,
    connect: function (ip) { return r.connect(ip); },
    insert: function (obj) { return r.table("test").insert(obj).run(this.connection); },
    all: function (callback) { return r.table("test").changes().run(this.connection, callback); },
    dis: function () { this.connection.close(); }
};
