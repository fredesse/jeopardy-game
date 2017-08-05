var Sequelize = require('sequelize');
var db = new Sequelize('jeopardify', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var Movies = db.define('Movies', {
  price: Sequelize.INTEGER,
  question: Sequelize.STRING,
  answer: Sequelize.STRING
});

// Movies.sync()
//   .then(function() {
//     return Movies.create({
//       price: 200,
//       question: 'This will be a question',
//       answer: 'This will be an answer'});
//   });

  module.exports = {Movies: Movies};