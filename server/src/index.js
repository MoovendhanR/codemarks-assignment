const express = require('express');
const mongoose=require('mongoose');
const connect = require('./config/db.js');
const cors=require("cors");

const userController=require("./Controllers/User.controller.js")


const app=express();
app.use(cors({
    origin:"*"
}))

app.use(express.json());

app.use("/users",userController)



mongoose.set("strictQuery",true);
app.listen(5000,async()=>{
    await connect();
    console.log('listening on port 5000')
})