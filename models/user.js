
import mongoose from "mongoose";

const Schema = mongoose.Schema(
    {
        name : String ,
        email : {
            type : String,
            unique : true,
        },
        password : {
            type : String,
            select : false,
        } ,
        kabBana : {
            type : Date,
            default : Date.now,
        },
       
      
        }
   
  
)

export const User = mongoose.model("users", Schema);