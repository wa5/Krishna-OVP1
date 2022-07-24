import { UploadedFile } from "express-fileupload"
const {VideosUpload}=require('../../models')
const path=require('path')
export const uploadvideosPage_Get=(req:any,res:any)=>{
    res.render('uploadvideosPage')
}

export const uploadvideosPage_Post=async(req:any,res:any)=>{
    await movies_uploads(req,res)
    res.render('uploadvideosPage')
}

const movies_uploads=(req:any,res:any)=>{
    let videos;
    let images;
    let uploadPath;
    let uploadPath2;
    let title=req.body.title
    let discription=req.body.discription
    let sub_categary=req.body.sub_categary
    const mypath=path.join(__dirname, '../../public')
    console.log("ppppppp",res.locals.user._id)
    //path.join(__dirname, 'src/public')
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req.files)
      return res.status(400).send('No files were uploaded.');
    }
    
  videos = req.files.file1 as UploadedFile
  images = req.files.thumbnail as UploadedFile
  uploadPath = mypath + '/videos/' + videos.name;
  uploadPath2 = mypath + '/images/' + images.name;
  let thumbnail=images.name
    let video_url=videos.name
  videos.mv(uploadPath, function(err) {
    if (err){
        console.log(err)
    }
   
     // return res.status(500).send(err);  
  });
  images.mv(uploadPath2, function(err) {
    if (err){
        console.log(err)
    }
   
      //return res.status(500).send(err);  
  });
  var moviedata=new VideosUpload({userid:res.locals.user._id,title:title,discription:discription,sub_categary:sub_categary,thumbnail:thumbnail,video_url:video_url})
  moviedata.save()
 // res.render('uploadvideosPage');
  }