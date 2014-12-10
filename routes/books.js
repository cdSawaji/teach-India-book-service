/**
 * Handles requests for /book
 */

var express = require('express');
var app = module.exports = express();
var Book = require('../model/book'); // Fix This: Should be available globally

/*
 * Handles POST request for adding new book information.
 */
app.post('/', function(req, res) {
    console.log('Creating a new book...');

    var book = new Book();
    book.title = req.body.title;
    console.log('Title : ' + book.title);
    book.author = req.body.author;
    book.description = req.body.description;

    console.log('Book { title : ' + book.title + ', author : ' + book.author + ', description : ' + book.description + ' }');
    res.json(book);
});

/*
 * Handles GET request for /book/title 
 * Returns book information when a title is provided.
 */
app.get('/title/:title', function(req, res) {
    var title = req.params.title;
    console.log('Getting book information for title : ' + title);
    var book = new Book();
    book.title = title;
    res.json(book);
});

/*
 * Handles GET request for /book/author
 * Returns a list of book information when an author is provided.
 */
app.get('/author/:author', function(req, res) {
    var author = req.params.author;
    console.log('Getting book information for author : ' + author);
    var book = new Book();
    book.author = author;
    res.json(book);
});