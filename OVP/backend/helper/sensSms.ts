const fast2sms=require('fast-two-sms')
export function sendMessage(message:any,number:any,res:any) {
    var options = {
      authorization:"jrs171tN3MbJlYFnEF7BbjJUd4mTkASbcUaDs3momoL6kRa3veaBv46mNFzE",
      message:message,
      numbers: ['7411984446'],
    };
 
    // send this message
 
    fast2sms
      .sendMessage(options)
      .then((response:any) => {
          console.log("kkk",response)
        res.send("SMS OTP Code Sent Successfully")
      })
      .catch((error:any) => {
        res.send("Some error taken place")
      });
}