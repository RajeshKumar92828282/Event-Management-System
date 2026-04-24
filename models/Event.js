
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  time: String,
  location: String,
  capacity: Number,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref:'User' }],
  approved: { type:Boolean, default:false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

module.exports = mongoose.model('Event', eventSchema);
