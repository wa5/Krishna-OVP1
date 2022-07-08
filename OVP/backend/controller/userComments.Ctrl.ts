
var {UserComments}=require('../models')
export const userComments_Get=(req:any,res:any)=>{
    UserComments.find({}, (err:any,data:any)=>{
        if(err)
        {
            console.log(err)
            res.send('error')
        }else{
            res.send(data)
        }
 
})
}
export const userComments_Post=(req:any,res:any)=>{
    var body=req.body.body
    var username=req.body.username
    var userId=req.body.userId
    var parentId=req.body.parentId
    var videoId=req.body.videoId
    var createdAt=req.body.createdAt
    console.log(req.body)
    console.log(req.params)
var userdta=new UserComments({body:body,username:username,videoId:videoId,userId:userId,parentId:parentId,createdAt:createdAt})
userdta.save()
    res.send('hello')
}
export const userComments_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const userComments_delete=(req:any,res:any)=>{
    res.send('hello')
}