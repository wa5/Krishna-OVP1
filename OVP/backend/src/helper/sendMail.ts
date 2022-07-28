var nodemailer=require('nodemailer')
export const sendingMails=(fname:any,email:any)=>{
var trnsport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'1ac13cs034'
    }
})
var mailOption={
    from:'waseemahmed116@gmail.com',
    to:email,
    subject:`successfully registerd test`,
    text:`hi ${fname} weloce to testing of ur mail`
}

trnsport.sendMail(mailOption,(err:any,info:any)=>{
    return 
    if(err){
      
        console.log(err)
        
    }else{
       
        console.log('mail send') 
        
    }
    
})

}