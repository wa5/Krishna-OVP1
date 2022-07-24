const { VideosUpload}= require('../../models')
export const videosPage_Get=(req:any,res:any)=>{
    const users=VideosUpload.find({userid:res.locals.user._id}, (err:any,data:any)=>{
        if(err)throw err;
        console.log("---",data)
        res.render('videosPage',{users:data})
          })
      
    
}