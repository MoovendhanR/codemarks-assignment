const express =require('express');
const mongoose = require('mongoose');
const jwt=require("jsonwebtoken");
const User = require('../Models/User.models.js');
const bcrypt = require('bcrypt')


const router = express.Router();


router.get("/",async(req, res) => {
     try{
        const users = await User.find().lean().exec();
       res.status(200).send({users:users})
     }catch(err){
        res.status(500).send({message:err.message});
     }
})
router.post("/register",async(req, res) => {
    const {email, password , confirm} = req.body
    try{
       bcrypt.hash(password, 5, async(err,secure_password) => {
              if(err) {
               console.error(err)
              }else{
                 const user=await User.create({email,password:secure_password,confirm});
                 res.status(201).send(user)
              }
       })
    }catch(err){
       res.status(500).send({message:err.message});
    }
})
router.post("/login",async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.find({email});
        const hashed_password = user[0].password
        if(user.length > 0){
            bcrypt.compare(password, hashed_password, (err, result) => {
                // result == true
                if(result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'masai');//payload ,secret key
                    res.status(201).send({"mes":"login successfull","token":token});
                }else{
                    res.status(500).send("wrong credentials")
                }
            });
          }else{
             res.status.send("wrong credential")
          }
    }catch(err){
       res.status(500).send({message:err.message});
    }
})

router.get('/:id', async(req, res) => {
   try{
       const note=await User.findById(req.params.id).lean().exec();
       res.status(200).send(note);
   }catch(err){
       res.status(500).send({message:err.message})
   }
})




module.exports=router;