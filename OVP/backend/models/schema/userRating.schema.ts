require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userRating=new Schema({
    rating:Number,
      username:String,
      userId: String,
      videoId:String,
      createdAt:String,
}, {
    timestamps: true
})

module.exports=mongoose.model('userRating',userRating)

