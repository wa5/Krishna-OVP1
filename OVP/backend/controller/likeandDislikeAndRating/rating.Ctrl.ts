export const rating_Put=(req:any,res:any)=>{
    var rating=req.body.rating
    var username=req.body.username
    var userId=req.body.userId
    var parentId=req.body.parentId
    var videoId=req.body.videoId
    var createdAt=req.body.createdAt
    res.send('hello')
}