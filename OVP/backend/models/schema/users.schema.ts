require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
    name:String,
    email:String,
    password:String,
    refreshToken:String
})

module.exports=mongoose.model('userDetails',userStructure)






// class Human{
//     eyes:string
//     nose:string
//     constructor({eyes,nose}){
// this.eyes=eyes
// this.nose=nose
//     }
// }

// var akshy=new Human({eyes:'two',nose:'two'})