const express = require("express");
const route = express.Router();
const BlogModel = require("../models/Blog-model");
const UserModels = require("../models/User-models");
const bcrypt = require('bcrypt');
const { crypt } = require("../utils/bcrypt");


route.post("/signup",async(req,res)=>{
    const {username , password , email} = req.body
    const hashedPassword = await crypt(password , 10)
    const upload = await UserModels.create({
        user_name:username,
        password:hashedPassword,
        email
    })

    res.status(200).json({
        message:"rediecting  to /login "
    })
    
})


route.post("/upload-blog-post",async(req, res) => {
  try {
    const { content,title,date, tags, userId } = req.body; //payloads
    
      const upload = await BlogModel.create({
        content,
        title,
        date,
        tags,
      })

      const update = await UserModels.findById(userId)
      update.post.push(upload._id)
      await update.save()
    
      res.status(200).json({
        message:"successfully Uploaded"
      })
  } catch (error) {
    console.log(error)
    res.status(400).json({
        message: error.message
    })
  }
});

module.exports = route;
