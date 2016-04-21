var port = 1338;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '908952375886078',
        clientSecret: '518b9a4520f6a1f180630f8e894ea519',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },
    twitter: {
	    clientID: '2JC7luf5rExQpoaR7DqcEgn50',
	    clientSecret: '4Z3uRF3B1fru6VHL42B2xApXTaSopii8Un987bFbpBvXA5pffs',
	    callbackURL: 'http://localhost:'+port+'/oauth/twitter/callback'
	}
};