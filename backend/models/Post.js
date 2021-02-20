const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create new schema for an upload POST
// A post will have file, date stamp, user who uploaded

const PostSchema = new Schema({
  user: String,
  caption: String,
  image: String,
  timestamp: Date,
  likedBy: [String],
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      username: String,
      comment: String,
    },
  ],
});

module.exports = mongoose.model("uploads", PostSchema);
