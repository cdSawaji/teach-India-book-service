var express = require('express');
var app = module.exports = express();
var Book = require('../model/book');

app.post('/', function(req, res) {
    var book = new Book();
    book.title = req.body.title;
    console.log('Title : ' + book.title);
    book.author = req.body.author;
    book.description = req.body.description;
    res.json(book);
});