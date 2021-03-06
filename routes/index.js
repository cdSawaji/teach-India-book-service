/**
 * Loads all the specified routes.
 */
var routes = require('node-require-directory')(__dirname);

module.exports = function(app) {
    Object.keys(routes).forEach(function(key) {
        if (key === 'index') return;
        console.log('Registering /' + key + ' route');
	app.use('/' + key, routes[key]);
    });
    console.log('Route registration completed ...');
};