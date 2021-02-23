// Schema for a USER
const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserSchema = new Schema({
  fname: String,
  lname: String,
  username: String,
  email: String,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

module.exports = UserSchema;
