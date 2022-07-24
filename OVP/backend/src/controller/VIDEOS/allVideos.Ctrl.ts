const { VideosUpload}= require('../../models')
export const AllVideosofuser_Get=(req:any,res:any)=>{
  VideosUpload.find({userid:res.locals.user._id}, (err:any,data:any)=>{
  if(err)throw err;
  res.send(data)
    })

  }
  
  