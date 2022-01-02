const mongoose = require('mongoose');

// create schema

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Image', imageSchema);
