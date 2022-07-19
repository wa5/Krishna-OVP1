import { TypedRequestBody } from "../../common/interfaces/common.interfaces";
import { sendingMails } from "../../helper/sendMail";
import { Iregister_Post } from "./new_user_register.interface";
var { User } = require("../../models");
import { Response } from "express";
const bcrypt = require("bcrypt");
export const register_Get = (req: any, res: any) => {
  res.render("register");
};
export const new_user_register_Post = async (
  req: TypedRequestBody<Iregister_Post>,
  res: Response
) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: "Username ,emil and password are required." });
  // check for duplicate usernames in the db

 User.find({ email: email }, async (err: any, data: any) => {
    if (data.length != 0) {
      console.log("kk", err, data[0].password);
      return res.sendStatus(409);
    } else {
      try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        //store the new user
        const newUser = { name: name, email: email, password: hashedPwd };
        var userdta = new User(newUser);
        userdta.save();
        await sendingMails(name, email);

        res.status(201).json({ success: `New user ${name} created!` });
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
    }
  });
  // console.log(duplicate)
  // if (duplicate) return res.sendStatus(409); //Conflict
};
export const register_Put = (req: any, res: any) => {
  res.send("hello");
};
export const register_delete = (req: any, res: any) => {
  res.send("hello");
};
