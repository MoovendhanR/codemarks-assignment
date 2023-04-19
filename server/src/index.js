const express = require('express');
const mongoose=require('mongoose');
const connect = require('./config/db.js');
const cors=require("cors");

const app=express();
app.use(cors({
    origin:"*"
}))

app.use(express.json());



mongoose.set("strictQuery",true);
app.listen(5000,async()=>{
    await connect();
    console.log('listening on port 5000')
})