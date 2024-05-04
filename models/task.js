
import mongoose from "mongoose";

const Schema = mongoose.Schema(
    {
        title : {
type : String,
required : true ,
        } ,
        description : {
            type : String,
            required : true,
        },
        inComplicated : {
            type : Boolean,
           default : false,
        },
       user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users",
            
        } ,
       
      
        }
   
  
)

export const Task = mongoose.model("task", Schema);