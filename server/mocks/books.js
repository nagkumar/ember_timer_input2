module.exports = function (app) {
  var express = require('express');
  var booksRouter = express.Router();
  var jsonStr = {
    "books": [{
      "id": 1,
      "title": "Ember.js nage Essentials",
      "isbn": "ISBN1",
      "pages": 180,
      "description": "Ember.js essentials to master",
      "authors": [1],
      "publisher": 1,
      "reviews": [1, 2, 3]
    },
      {
        "id": 2,
        "title": "Some Other Book On Ember.js",
        "isbn": "ISBN2",
        "pages": 200,
        "description": "Some Description",
        "authors": [2],
        "publisher": 1,
        "reviews": [4, 5, 6]
      },

      {
        "id": 4,
        "title": "First Some Other Book On Ember.js",
        "isbn": "ISBN2",
        "pages": 200,
        "description": "Some Description",
        "authors": [2],
        "publisher": 1,
        "reviews": [4, 5, 6]
      }
    ]
  };

  booksRouter.get('/', function (req, res) {
    res.send(jsonStr);
  });

  booksRouter.post('/', function (req, res) {
    res.status(201);
    console.log(req.params);
    res.send({
      "book": {
        "id": Math.floor(Math.random() * 1000)
      }
    });
  });

  booksRouter.get('/:id', function (req, res) {
    var reviews, authors, publisher;
    if (req.params.id == 1) {
      reviews = [1, 2, 3];
      authors = [1];
      publisher = 1;
    } else if (req.params.id == 2) {
      reviews = [4, 5, 6];
      authors = [2];
      publisher = 2;
    }
    res.send({
      "book": {
        "id": req.params.id,
        "title": "Ember.js Essentials",
        "isbn": "ISBN1",
        "pages": 180,
        "description": "Ember.js essentials to master",
        "authors": authors,
        "publisher": publisher,
        "reviews": reviews
      }
    });
  });

  booksRouter.put('/:id', function (req, res) {
    res.send({
      "book": {
        "id": req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  app.use('/api/books', booksRouter);
};
