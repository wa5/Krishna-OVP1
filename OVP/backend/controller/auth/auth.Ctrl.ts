
import express, {Request, Response} from 'express';
import { TypedRequestBody } from '../../common/interfaces/common.interfaces';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');
var {User}=require('../../models')
interface IhandleLogi{
    email:string,
    password:string
}

export  const handleLogin_post = async (req:TypedRequestBody<IhandleLogi>, res:Response) => {
    
    const { email, password } = req.body;
    if (!email || !password){
        return res.status(400).json({ 'message': 'Username and password are required.' });
    } else{
        
       // const match = await bcrypt.compare(password);
        
        User.find({ email: email}, async(err: any, data: any) => {
            console.log("kk", data);
            if (data.length != 0) {
        // evaluate password 
             const match = await bcrypt.compare(password, data[0].password);
            if (match) {
                  // create JWTs
        const accessToken = jwt.sign(
            { name: data[0].name },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { name: data[0].name },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
    
        User.findOneAndUpdate({email:data[0].email},{refreshToken},
        {overwrite:false,new:true},(err:any)=>{
            if(err){
                console.log(err)
            }else{
                res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
                res.json({ accessToken });
            }
            
        })
                // create JWTs
                // res.send({ success: `User ${data[0].name} is logged in!` });
            } else {
                res.sendStatus(401);
            }
              
              
            } 
        })
    }
        

}

    
        
