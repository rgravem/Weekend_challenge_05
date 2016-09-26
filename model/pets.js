var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema for adding to databade
var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  imageUrl: String
}); // end Schema

var Pets = mongoose.model('furbabies', petSchema);

module.exports = Pets;
