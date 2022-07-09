require('dotenv').config();
import express from 'express'
const bodyParser = require('body-parser');

var app=express()
const endPont=require('./routes')
app.use(bodyParser.urlencoded({ extended: true }));
const path=require('path')
const cors=require('cors')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
app.use("/video", express.static(__dirname + "src/video"))
app.use(express.static(path.join(__dirname, 'src/public')))


app.use('/api',endPont.login)
app.use('/api',endPont.home)
app.use('/api',endPont.register)































app.get('*',(req,res)=>{
  res.send({api:'not found',status:404})
})



app.listen(8000,()=>{console.log("server started 8000")})