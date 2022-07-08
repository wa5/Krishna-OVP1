require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var moviesStructure=new Schema({
    title:String,
    discription:String,
    categary:String,
    sub_categary:String,
    thumbnail:String,
    video_url:String,
    like:{type:Number,   
            default: 0},
    dislike:{type: Number,   
        default: 0},
})

module.exports=mongoose.model('movies',moviesStructure)






// class Human{
//     eyes:string
//     nose:string
//     constructor({eyes,nose}){
// this.eyes=eyes
// this.nose=nose
//     }
// }

// var akshy=new Human({eyes:'two',nose:'two'})