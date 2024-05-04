
import jwt from "jsonwebtoken";
import { User } from "../models/user.js"



export const isAuthenticated = async(req, res , next) =>{

  // console.log(User);

// console.log(req.cookies);
    const {token} = req.cookies;

    console.log("value of token is " ,token);
    if(!token){
      return res.status(404).json({
        success : false,
        message : "Login First"
       })
    }

    const decoded = await jwt.verify(token, "secret");
    console.log("decoded has a value of  ");
    console.log(decoded._id);
    

    req.user = await User.findById(decoded._id);
    console.log(req.user);

   next();
}