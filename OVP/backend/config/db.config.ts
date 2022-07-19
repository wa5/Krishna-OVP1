var mongoose=require('mongoose')
//import mongoose from 'mongoose'
var url2="mongodb://127.0.0.1:27017/ovp"
mongoose.connect(url2,(err:any)=>{
    if(err)throw err
    console.log('db connection done')
})