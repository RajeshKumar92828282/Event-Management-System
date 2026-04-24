
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
  try{
    const hash = await bcrypt.hash(req.body.password,10);
    const user = new User({...req.body,password:hash});
    await user.save();
    res.json(user);
  }catch(err){
    res.status(500).send(err.message);
  }
};

exports.login = async (req,res)=>{
  try{
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("User not found");

    const valid = await bcrypt.compare(req.body.password,user.password);
    if(!valid) return res.status(400).send("Invalid password");

    const token = jwt.sign(
      {id:user._id,role:user.role},
      process.env.JWT_SECRET
    );

    res.json({token});
  }catch(err){
    res.status(500).send(err.message);
  }
};
