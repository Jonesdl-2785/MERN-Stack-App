const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true,
});

const task = mongoose.model('task', taskSchema);

module.exports = task;
