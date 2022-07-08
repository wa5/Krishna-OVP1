require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userDisLIke=new Schema({
      dislike:{type:Number,   
        default: 1},
      username:String,
      userId: String,
      videoId:String,
      createdAt:String,
}, {
    timestamps: true
})

module.exports=mongoose.model('userDisLIke',userDisLIke)

