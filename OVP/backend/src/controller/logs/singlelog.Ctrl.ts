


const fs = require('fs');
const path=require('path')
var p=path.join(__dirname,'../../logs')
var files = fs.readdirSync(p);

export const singlelogs_Get=(req:any,res:any)=>{
    path.join(__dirname,'src/views')
    
    
try {  
    var data = fs.readFileSync(`${p}/${req.params.fname}`, 'utf8');
       
    res.render('singlelog',{logs:data.toString()})
} catch(e:any) {
    console.log(e);
    res.render('singlelog',{logs:files})
}
    
}












