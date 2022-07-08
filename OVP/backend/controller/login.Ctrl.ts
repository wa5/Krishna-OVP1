import { sendingMails } from "../helper/sendMail"
var {User}=require('../models')
export const login_Get=(req:any,res:any)=>{   
    res.render('login')
}
export const login_Post=async(req:any,res:any)=>{
    console.log("ll1",req.body)  
    console.log("ll",req.query)  
    var name=req.body.name
    var email=req.body.email
    var password=req.body.password 
   await User.find({email:email,password:password},(err:any,data:any)=>{
       
        if(data.length===0){
            console.log(err,data)
            res.render('login')
        }else{
            console.log(err,data)
            res.render('home')
        }
    }).clone().catch(function(err:any){ console.log(err)})
   // res.send('hello')
}
export const login_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const login_delete=(req:any,res:any)=>{
    res.send('hello')
}