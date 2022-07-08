require('dotenv').config();
import express from 'express'
import { UploadedFile } from 'express-fileupload';
import { nextTick } from 'process';
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var app=express()
const path=require('path')
const cors=require('cors')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
app.use("/video", express.static(__dirname + "src/video"))
app.use(express.static(path.join(__dirname, 'src/public')))
const endPont=require('./src/routes')
app.use(bodyParser.urlencoded({ extended: true }));
var {Movies,Tvshows,User}=require('./src/models')
app.use(bodyParser.json());
const fs = require("fs");
app.use(fileUpload())
app.use(cors({
  origin:'*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))

app.use('/api',endPont.login)
app.use('/api',endPont.home)
app.use('/api',endPont.register)
app.use('/api',endPont.newUser)
app.use('/api',endPont.movies)
app.use('/api',endPont.tvshows)
app.use('/api',endPont.sms)
app.use('/api',endPont.userlist)
app.use('/api',endPont.userComments)
app.use('/api',endPont.loginUser)
app.use('/api',endPont.like)
app.use('/api',endPont.dislike)





























app.get('*',(req,res)=>{
  res.send({api:'not found',status:404})
})



app.listen(8000,()=>{console.log("server started")})