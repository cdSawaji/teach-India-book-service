/**
   This is a basic server setup. It reads in the config file for all 
   the service related information.

   @author sawajic
*/

// Importing required modules,
// 1. express - is the node framework used. 
var express = require('express');

// 2. body-parser - is used to parse incoming json for POST requests.
var bodyParser = require('body-parser');

// Initialiing the app
var app = express();

// Initializing the model
var Book = require('./model/book');

/**
   Starts the service at the port specified in the config file.
 */
function start() {
    console.log('Starting service ...');
 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var port = process.env.PORT || 8080;

    var router = express.Router();

    // Initial Testing                                                                                                                                                                   
    // TODO: Think of a better way to do this.                                                                                                                                           
    require('./routes')(app);
    //   router.get('/', function(req, res) {
    //    res.json({ message: 'test' });
    //});

    // Register routes                                                                                                                                                                   
    // app.use('/books', router);

    // Start the server                                                                                                                                                                  
    app.listen(port);
    console.log('Service started at port : ' + port);

    // TODO: Add more log messages                                                                                                                                                  
}

exports.start = start;

