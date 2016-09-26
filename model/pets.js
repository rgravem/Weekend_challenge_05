var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  imageUrl: String
});

var Pets = mongoose.model('furbabies', petSchema);

module.exports = Pets;
