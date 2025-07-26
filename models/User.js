const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  edad: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
});
const User = model('User', userSchema);
module.exports = User;

