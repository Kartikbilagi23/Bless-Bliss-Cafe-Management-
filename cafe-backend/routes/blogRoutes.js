const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({date:-1});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.post("/",async (req,res) => {
  try {
    const {title,content,author,image}=req.body;
    if(!title||!content||!author){
      return res.status(400).json({error:"All fields are require"});
    }
      const newBlog=new Blog({title,content,author,image});
      await newBlog.save();
      res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({error:"Failed to create Blog"});
  }
})
module.exports = router;
