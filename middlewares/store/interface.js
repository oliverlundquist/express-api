//the store implementation should return promises
var store = require('./rethinkdb');

module.exports = function (app) {
    var _store  = {};
    var _config = app.get('config');

    //middleware
    _store.connect = function (req, res, next) {
        //////////////////////////////////
        // should be abstracted to app.set
        req.store = store;
        //////////////////////////////////

        store.connect(_config.store.ip)
        .then(function (connection) {
            store.connection = connection;
        })
        .error(function (error) {
            return next(new Error('cannot connect to store!'));
        })
        .finally(next);
    };

    _store.insert = function (obj) {
        return store.insert(obj);
    };

    return _store;
};
