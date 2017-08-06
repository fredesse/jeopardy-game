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
//       price: 1000,
//       question: 'Makes you want to cry.',
//       answer: 'What is this game?'});
//   });

  module.exports = {Movies: Movies};