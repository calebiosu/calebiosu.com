exports.render = function(req, res) {
    res.render('index', {
        title: 'Calebiosu',
        user: JSON.stringify(req.user)
    });
};