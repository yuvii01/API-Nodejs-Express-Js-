import jwt from "jsonwebtoken";


// import {config} from "dotenv";


// config({
//     path : "./data/config.env"
// })


export const sendCookie = async(user ,res,status,success ,message)=>{


    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV)
   await console.log("this is " ,user[0]);
   console.log(user[0]._id.valueOf());

    const token  = await jwt.sign({ _id : user[0]._id}, "secret");
    // console.log(user._id);
        
res.status(status).cookie("token", token,
{
httpOnly: true,
expires :  new Date(Date.now() + 15*60*1000),
sameSite : process.env.NODE_ENV === "DEVELOPMENT" ? "lax" : "none",
secure : process.env.NODE_ENV === "DEVELOPMENT" ? false: true

}).json({
    success : success ,
    message : message,
})
}

