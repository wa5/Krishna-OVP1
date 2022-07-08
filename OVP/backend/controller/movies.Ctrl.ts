import { UploadedFile } from "express-fileupload";

export const movies_Get=(req:any,res:any)=>{
    console.log(req.query) 
    res.render('moviesUpload')
}
export const movies_Post=(req:any,res:any)=>{
    console.log(req.query)
    res.send('hello')
}
export const movies_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const movies_delete=(req:any,res:any)=>{
    res.send('hello')
}