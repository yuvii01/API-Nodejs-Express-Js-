import { Task } from "../models/task.js";



var newTitle = "";

export const newTask = async(req, res, next) =>{

try {
    const {title, description } = req.body;

//  newTitle = title;

if(title == newTitle){
    return res.json({
        success : false,
        message : "Same titled task already added" 
    })
}

console.log(newTitle);
newTitle = title;

console.log(newTitle);


    console.log(req.user);
        const task =  await Task.create({
            title, description, user : req.user
        })
    
        // const task = new Task({title});
        // await task.save();
    
        console.log("task is")
    
        console.log(task);
    
        res.status(201).json({
            success : true,
            message : "Task added Successfully"
        })
} catch (error) {
    next(error)
}
 
}



export const getMytasks = async (req,res, next) =>{
    // const {token} = req.cookies ;
    // if(!token){
    //      return res.json({
    //         success : false,
    //         message : "no current user"
    //     })
    // }

   try{
    const {_id} = req.user ;

    console.log(req.user);
    const tasks = await Task.find({user : _id}) 

    res.status(200).json({
        success : true,
        tasks

    })
   }

   catch(error){
    next(error)
   }


}

export const updateTask = async(req,res, next) =>{

   try{
    const {id} = req.params ;

    const task = await Task.findById(id);
    task.isCompleted = !task.isCompleted ;

    await task.save();
    res.status(201).json({
        success : true,
        message : "Updated Successfully",
        task
    })
   }
   catch(err){
    next(err)
   }
}


export const deleteTask = async(req,res, next) =>{

  try{
    const {id} = req.params ;
    const task = await Task.findById(id);


    if(!task){
        return next(new Error("nice"))
    } 

    await Task.deleteOne({user : id})
    res.json({
        success : true,
        message : "Deleted Successfully",
        task
    })


  }

  catch(err){
next(err)
  }
}