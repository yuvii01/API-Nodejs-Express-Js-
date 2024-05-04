import mongoose from "mongoose"
import {config} from "dotenv";


config({
    path : "./data.config.env"
})

export const ConnectDB = ()=>{
    mongoose.connect(
       "mongodb://localhost:27017",{
            dbName : "backendapi"
        }).then(
            ()=>{
                console.log("db connected")
            }
        ).catch(
            ()=>{
                console.log("unable to connect to db")
            }
        )
}