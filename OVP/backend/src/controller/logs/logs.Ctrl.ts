const fs = require('fs');
const path=require('path')
var p=path.join(__dirname,'../../logs')
var files = fs.readdirSync(p);

export const logs_Get=(req:any,res:any)=>{
    path.join(__dirname,'src/views')
    console.log("0p0p0",files,p)
    res.render('logs',{logs:files})
}