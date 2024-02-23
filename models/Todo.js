const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema(
    {
        Washtype:{
            type:String,
            required:true,
            maxLength:50,
        },
        ScheduleDate:{
            type:String,
            required:true,
            maxLength:50,
        },
        ScheduleTime:{
            type:String,
            required:true,
            maxLength:50,
        },
        PickupType:{
            type:String,
            required:true,
            maxLength:50,
        },
        Address:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdBy:{
          type:String,
          required:true,
          maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports=mongoose.model("Todo",todoSchema);