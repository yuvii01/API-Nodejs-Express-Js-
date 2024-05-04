import { User } from "../models/user.js"
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

import cookieParser from "cookie-parser";
import { errormiddleware } from "../middleware/error.js";




var CurrentUser ;




export const getAllUsers = async(req,res)=>{
   
}








export const getNewUser = async(req,res, next)=>{
    try{
        const{name, email,password} = req.body;

        let user = await User.findOne({email});
 
        if(user){
 
 
 
         return next(new errormiddleware("User with this Email Already Exists" , 404))
         // return res.status(404).json({
         //     success: false,
         //     message : "User with this Email Already Exists"
         // })
        }
 
 
      let hashPass = await bcrypt.hash(password, 10);
         user  = User.create({
             name, email, password:hashPass
         })
 
 
 
 sendCookie(user ,res,201,true,"Registered Successfully")
    } catch(err){
next(err)
    }
       
}



export const loginUser = async(req,res, next) =>{
 try{
 
    const {email, password} = req.params;


    console.log(email);


   
    let user = await User.find({email}).select("+password")

   
if(!user){
    return next(new errormiddleware("User is not registered", 404))
}

//     if(!user){

//         console.log("user is null")
//  return res.json({
// status : false,
// message : "User is not registered"

// })
//     }

 console.log(user[0].password)


        const isMatch = await bcrypt.compare(user[0].password, password );
        if(isMatch){
          
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            })

           
        }

else {
    CurrentUser = user;
    
    sendCookie(user, res, 201, true , `Welcome Back ${user[0].name}`)
}
    

 }catch(err){
next(err);
 }

}




export const myProfile = async(req,res, next)=>{


      
try {
    console.log("my Profile")
res.json({
    success : true,
    message : "My Profile"
})
    
} catch (error) {
    
    next(error)
} 
// sendCookie( " " ,res,201,true,"My Profile is now Visible")
}



export const logout = async(req,res, next)=>{


      
try {
    
    res.clearCookie("token").json({
        success : true,
        message : "Logout Successfully"
    })
} catch (error) {
    next(error)
}
         
    // sendCookie( CurrentUser,res,201,true,"My Profile is now Visible")
    }
    











            export const FindUser = async(req,res)=>{

                    }



                  


              

