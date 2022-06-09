const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    Surname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,

    },
    
    StartDate:{
        type:String,
        required:true,
    },
    ContractType:{
        type:String,
        required:true,
    },
    Position:{
        type:String,
        required:true,
    },
    /* EmployeeImage:{
       type:String,
       required:true,
   }, */ 
});
const Add =mongoose.model("employee",addSchema);
module.exports=Add;