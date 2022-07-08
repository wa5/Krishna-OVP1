var { Movies,userDisLIke } = require("../../models");
export const dislike_Post = (req: any, res: any) => {
  var username = req.body.username;
  var userId = req.body.userId;
  var videoId = req.body.videoId;
  console.log("like", req.body);
  if (!username || !userId || !videoId)
    return res
      .status(400)
      .json({ message: "name ,userId and videoId are required." });
  // check for duplicate usernames in the db
  userDisLIke.find({ userId: userId }, async (err: any, data: any) => {
    if (data.length != 0) {
        console.log("like1", req.body,data);
      res.send("u already liked");
    } else {
      Movies.find({ _id: videoId }, async (err: any, data: any) => {
        if (data.length != 0) {
            console.log("like2", req.body,data);
          console.log("kk", err, data[0].like+1);
          Movies.findOneAndUpdate(
            { _id: videoId },
            { like: data[0].like+1 },
            { overwrite: false, new: true },
            (err: any,data:any) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
                const userLIkedata = {
                  username: username,
                  userId: userId,
                  videoId: videoId,
                };
                var userLIkes = new userDisLIke(userLIkedata);
                userLIkes.save();
                console.log("updated");
              }
              
            }
          );

          return res.sendStatus(409);
        } else {
          res.send("hello");
        }
      });
    }
  });
};
export const dislike_Get=(req:any,res:any)=>{
    userDisLIke.find({}, (err:any,data:any)=>{
        if(err){console.log(err)}else{
            res.send(data)
        }
       
          })
    
}