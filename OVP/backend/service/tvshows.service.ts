import { UploadedFile } from "express-fileupload";
var {Tvshows}=require('../models')
const tvshows_uploads=(req:any,res:any)=>{
    let videos;
    let images;
    let uploadPath;
    let uploadPath2;
    let title=req.body.title
    let discription=req.body.discription
    let categary=req.body.categary
    
    console.log(">>>",req.body,req.body.title)
    
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req.files)
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files)
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  videos = req.files.file1 as UploadedFile
  images = req.files.thumbnail as UploadedFile
  uploadPath = __dirname + '/src/public/videos/' + videos.name;
  uploadPath2 = __dirname + '/src/public/images/' + images.name;
  console.log(videos.name)
  console.log(images.name)
  let thumbnail=images.name
    let video_url=videos.name
  videos.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);  
  });
  images.mv(uploadPath2, function(err) {
    if (err)
      return res.status(500).send(err);  
  });
  var tvshowsdata=new Tvshows({title:title,discription:discription,categary:categary,thumbnail:thumbnail,video_url:video_url})
  tvshowsdata.save()
  res.render('upload');
  }
  
module.exports= tvshows_uploads