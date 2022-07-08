require('dotenv').config();
import express from 'express'
const bodyParser = require('body-parser');
var app=express()

const endPont=require('./routes')
app.use(bodyParser.urlencoded({ extended: true }));
var {Movies,Tvshows,User}=require('./src/models')
app.use(bodyParser.json());



app.use('/api',endPont.login)
app.use('/api',endPont.home)
app.use('/api',endPont.register)































app.get('*',(req,res)=>{
  res.send({api:'not found',status:404})
})



app.listen(8000,()=>{console.log("server started")})