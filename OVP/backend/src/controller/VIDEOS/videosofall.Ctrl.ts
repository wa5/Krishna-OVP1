const { VideosUpload}= require('../../models')
export const videosofall_Get=(req:any,res:any)=>{
  VideosUpload.find({}, (err:any,data:any)=>{
  if(err)throw err;
  console.log("jjj",data)
  res.render('videos/videosofall',{movies:data})
    })

  }