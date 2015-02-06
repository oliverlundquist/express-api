module.exports = {
    'index': function (req, res) {
        req.store
            .insert({ title: "express api", content: "test insert" })
                .then(function (result) {
                    console.log(result);
                    res.send('hey'+"\n");
                });
    }
};
