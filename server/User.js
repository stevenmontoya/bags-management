const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bags: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
