import { sendMessage } from "../helper/sensSms"

export const sms_Post=(req:any,res:any)=>{
    console.log(req.body.message)
    console.log(req.body.number)
 
    sendMessage(req.body.message,req.body.number,res)
}