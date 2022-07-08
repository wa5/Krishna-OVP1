import { sendingMails } from "../helper/sendMail"
var {User}=require('../models')
export const register_Get=(req:any,res:any)=>{
    res.render('register')
}
export const register_Post=async(req:any,res:any)=>{
    var name=req.body.name
    var email=req.body.email
    var password=req.body.password
    console.log(req.body)
    console.log(req.params)
var userdta=new User({name:name,email:email,password:password})
userdta.save()
 await sendingMails(name,email)

    res.render('login',
    {name:name,email:email,password:password})
  
      
}
export const register_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const register_delete=(req:any,res:any)=>{
    res.send('hello')
}