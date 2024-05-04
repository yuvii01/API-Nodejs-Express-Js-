import express from "express";
import mongoose, { get }  from "mongoose";
import { User } from "./models/user.js";
import Userrouter from "./routes/user.js";
import Taskrouter from "./routes/task.js";
import { ConnectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import cors from "cors" ;

import {config} from "dotenv";


config({
    path : "./data/config.env"
})

export const app = express();
ConnectDB();
// app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors({
    origin : 3000, 
    methods : ["GET" , "POST" , "PUT", "DELETE"] ,
    credentials: true
}))
app.use(cookieParser());
app.use("/users" , Userrouter);

app.use("/tasks" , Taskrouter);






// ConnectDB();

 

app.get("/", (req,res)=>{
    res.send(" <h1> 5000 server port </h1> ")
})


// app.get("/users/all", async(req,res)=>{
// const users = await User.find({})
//     res.json({
//         success : true,
//         users ,

//     })
// })



// app.get("/users/new", async(req,res)=>{

// const {name, email, password} = req.body;
// ;
//     const user = await User.create(
//         {
//             name ,
//             email,
//             password ,
//         }
//     )


    //     res.cookie("token", email).json({
    //         success : true, 
    //         message : "Registered Successfully",
    //         user
    
    //     })
    // })




    
// app.get("/userid", async(req,res)=>{

//     const {id} = req.body;

//     console.log(id);
    
//         const user = await User.findById(id);

    
    
//             res.cookie("token", id).json({
//                 success : true, 
//                 message : "Registered Successfully",
//                 user
        
//             })
//         })





app.listen(5000, ()=>{
    console.log("Server Started")
})

