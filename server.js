// Basic server setup

// TODO: Add detailed documentation for this setup.
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');


// TODO: Maintain a separate service level config file
// Load it on start up and read the values from it.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// Initial Testing
// TODO: Think of a better way to do this.
router.get('/', function(req, res) {
    res.json({ message: 'test' });
});

// Register routes
app.use('/books', router);

// Start the server
app.listen(port);
console.log('Service started at port : ' + port);

// TODO: Add more log messages
