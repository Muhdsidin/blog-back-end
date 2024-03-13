const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  user_name: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blogs", //relation between blog post and user
    },
  ],
});

module.exports = mongoose.model( "User",UserModel )
