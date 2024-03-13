const mongoose = require("mongoose");

const BlogModel = new mongoose.Schema({
  content: {
    require: true,
    type: String,
  },
  title: {
    require: true,
    type: String,
  },
  date:{
    require: true,
    type: String,
  },
  tags:{
    require: true,
    type: String,
  }
});

module.exports = mongoose.model("Blogs",BlogModel)
