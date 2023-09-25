const mongoose=require("mongoose");
const truckSchema=new mongoose.Schema({
    Reg_Number:{
        type:String,
        required:true
    },
    Truck_Type:{
        type:String,
        required:true
    },
    Ownership:{
        type:String,
        required:true
    },
    Driver_Name:{
        type:String,
        required:false,
    }

})

module.exports=mongoose.model('Trucks',truckSchema); 