const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  image: String
});

module.exports = mongoose.model('Review', ReviewSchema);
