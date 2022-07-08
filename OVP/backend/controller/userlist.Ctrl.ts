var {User}=require('../models')
export const userlist_Get=(req:any,res:any)=>{
    User.find({}, (err:any,data:any)=>{
        if(err)
        {
            console.log(err)
            res.send('error')
        }else{
            res.send(data)
        }
 
})
}
export const userlist_Post=(req:any,res:any)=>{
    res.send('hello')
}
export const userlist_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const userlist_delete=(req:any,res:any)=>{
    res.send('hello')
}