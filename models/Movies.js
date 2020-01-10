const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  classification: {
    type: String,
    trim: true,
  },
  duration: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  studio: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model("Movies", moviesSchema);