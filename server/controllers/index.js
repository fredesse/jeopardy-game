var db = require('../db');

console.log('this is db:', db);

module.exports = {
  movies: {
    get: function(req, res) {
      db.Movies.findAll()
        .then(function(movies) {
          res.json(movies);
          res.end();
        });
    }
  }
}