const { VideosUpload}= require('../../models')
export const userdetails_Get=async(req:any,res:any)=>{
    console.log("====1",res.locals.user._id)
    const users= await VideosUpload.find({userid:res.locals.user._id})
        
        console.log("---",users)
       
    res.render('userdetails')
}
export const userdetails_Post=(req:any,res:any)=>{
    console.log(req.body)
    res.render('userdetails')
}