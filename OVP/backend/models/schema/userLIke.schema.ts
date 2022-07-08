require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userLIke=new Schema({
      like:{type:Number,   
        default: 1},
      username:String,
      userId: String,
      videoId:String,
      createdAt:String,
}, {
    timestamps: true
})

module.exports=mongoose.model('userLIke',userLIke)

