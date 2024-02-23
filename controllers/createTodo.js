//import the Model
const Todo=require("../models/Todo");

//define route handler
exports.createTodo =async (req,res)=>{
    try{
        //extract title and description from request body
        const{ScheduleTime,PickupType,ScheduleDate,Washtype,Address,createdBy}=req.body;
        //create a new todo object and insert in db
        const response=await Todo.create({ScheduleTime,PickupType,ScheduleDate,Washtype,Address,createdBy});
        
        res.status(200).json({
            success:true,
            message:"Entry Created Sucessfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
    }
}


