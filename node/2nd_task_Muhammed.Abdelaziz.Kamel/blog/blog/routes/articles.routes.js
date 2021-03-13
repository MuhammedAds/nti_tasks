const express = require("express");
const router = express.Router();

const { Article } = require("../models/article.model");
const { User } = require("../models/user.model");
const { Token } = require("../models/token.model");
const {JWT_SECRET} = require('../config/secrets');
const { token } = require("morgan");
const jsonwtoken  = require('jsonwebtoken')

router.get("/", async (req, res) => {
  try {
    

    const token = req.headers.authorization.split(" ")[1];
    const user = jsonwtoken.verify(token, JWT_SECRET);
    console.log(user);
    
    const articles = await Article.find({'publisher.id': user.id});
    res.json({
      articles,
    });
  } catch(err) {
    res.status(400).json({msg: 'Invalid User Token'})
  }
});

router.post("/", async (req, res) => {
  try{
      const TokenHeader = req.headers['authorization'];//req.headers.authorization
  if(!TokenHeader)  {return res.status(404).json({msg: "Token Not Found"})}
  const token=TokenHeader.split(" ")[1];// req.token = token
  const uuser = jsonwtoken.verify(token, JWT_SECRET); // console.log("valie : :" +TokenHeader)
  const userid= uuser.id;
  const { title, content } = req.body;
  const user = await User.findById(userid);
  const article = new Article({
    title,
    content,
    publisher: {
      id: user.id,
      name: user.name,
      email:user.email,
      phoneNumber:user.phoneNumber
    },
  });
  await article.save();
  res.json({ article });
  } catch(err){
  res.status(404).json({msg:'Token Not Verify'})
}});

router.put("/:id", async (req, res) => {
  try{
    const TokenHeader = req.headers['authorization'].split(' ')[1];
    const uuser = jsonwtoken.verify(TokenHeader, JWT_SECRET);
  if(!TokenHeader)  {return res.status(404).json({msg: "Token Not Found"})}
  const { id } = req.params;
  const { title, content } = req.body;
  const articlesend = await Article.findById(id)
  res.json({ articlesend });}
  catch(err){
    res.status(404).json({msg:'Token Not Verify'})
  }
});

router.delete("/:id", async (req, res) => {
  try{
  const TokenHeader = req.headers['authorization'].split(' ')[1];
  const uuser = jsonwtoken.verify(TokenHeader, JWT_SECRET);
 // if(!TokenHeader)  {return res.status(404).json({msg: "Token Not Found"})}
//  token=TokenHeader.split(" ")[1];
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.json({ msg: " Delete Article" });
} catch(err){
  res.status(404).json({msg:'Token Not Verify'})
}
});

module.exports = router;