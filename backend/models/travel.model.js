const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelSchema = new Schema({
  username: { type: String, required: true },
  destination: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;