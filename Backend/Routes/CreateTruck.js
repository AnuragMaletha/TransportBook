const express=require('express');
const router=express.Router();
const Trucks=require('./../Models/Trucks');

router.post('/createtruck', async (req, res) => {
    const data={
        Reg_Number:req.body.Reg_Number,
            Truck_Type:req.body.Truck_Type,
            Ownership:req.body.ownership,
            Driver_Name:req.body.Driver_Name
    }
    const newData= new Trucks(data);
      //const existTitle = await Trips.findOne({ name: req.body.title});
  
      const alert={message:"alert"};
      if (false) {
        res.status(500).json(alert);
      }else{
        try{
            console.log(req.body)
          const savedData= await newData.save();
          res.status(201).json(savedData);
          }catch(err){
          res.status(500).json(err);
        }
      }
      });

/*router.post('/createtruck',async(req,res)=>{
    try{
        await Trucks.create({
            Reg_Number:req.body.Reg_Number,
            Truck_Type:req.body.Truck_Type,
            Ownership:req.body.ownership,
            Driver_Name:req.body.Driver_Name
        })
        res.json({success:true})
    }
    catch(error){
        console.log(error);
        const errorDetails = error.errors || [];
        res.status(500).json({ success: false, errors: errorDetails });
    } 

        
})*/

router.get('/trucks', async (req, res) => {
    try {
        const data = await Trucks.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'An error occurred while fetching trips' });
    }
});


module.exports=router; 
