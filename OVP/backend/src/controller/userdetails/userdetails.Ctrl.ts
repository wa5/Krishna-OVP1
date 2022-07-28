export const userdetails_Get=(req:any,res:any)=>{
    res.render('userdetails')
}
export const userdetails_Post=(req:any,res:any)=>{
    console.log(req.body)
    res.render('userdetails')
}