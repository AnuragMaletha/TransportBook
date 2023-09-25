const mongoose=require('mongoose');
const tripSchema=new mongoose.Schema({
    Party_Name:{
        type:String,
        required:true
    },
    Reg_Number:{
        type:String,
        required:true
    }, 
    Origin:{
        type:String,
        required:true
    },
    Destination:{
        type:String,
        required:true 
    },
    Freight_Amount:{
        type:Number,
        required:true
    },
    Trip_Start_Date:{
        type:Date,
        required:true
    },
    KM_Reading:{
        type:Number,
        required:true
    },
    Bill_Type:{
        type:String
    },
    LR_No:{
        type:String
    },
    Material:{
        type:String
    },
    Note:{
        type:String
    }


})
module.exports=mongoose.model("trips",tripSchema);