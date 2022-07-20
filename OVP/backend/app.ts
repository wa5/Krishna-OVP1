require('dotenv').config();
import express from 'express'
const bodyParser = require('body-parser');
var app=express()
const endPont=require('./src/routes')
app.use(bodyParser.urlencoded({ extended: true }));
const path=require('path')
const cors=require('cors')
const ejs=require('ejs')
const { logger } = require('./src/middleware/logEvents');
const errorHandler = require('./src/middleware/errorHandler');
const session=require('express-session')
// custom middleware logger
app.use(logger);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
app.use("/video", express.static(__dirname + "src/video"))
app.use(express.static(path.join(__dirname, 'src/public')))


app.use(session({
    secret:'my secrate key',
    resave: false,
    saveUninitialized: false,
  
}))

app.use('/api',endPont.login)
app.use('/api',endPont.home)
app.use('/api',endPont.register)
app.use('/api',endPont.videosPage)
 app.use('/api',endPont.uploadvideosPage)























app.get('/a',(req:any,res:any)=>{
    req.session.isAuth=true
    console.log(req.session.id)
    res.send('hello')
})







app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.render('404');
  } else if (req.accepts('json')) {
      res.json({ "error": "404 Not Found" });
  } else {
      res.type('txt').send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(8000,()=>{console.log("server started 8000")})