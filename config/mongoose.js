var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    
    // Setup User "schema"
    require('../app/models/user.server.model');
	// Setup Post "schema"
    require('../app/models/post.server.model');
    
    return db;
};