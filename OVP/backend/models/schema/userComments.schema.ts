require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userComments=new Schema({
      body:String,
      username:String,
      userId: String,
      videoId:String,
      createdAt:String,
}, {
    timestamps: true
})

module.exports=mongoose.model('userComments',userComments)

